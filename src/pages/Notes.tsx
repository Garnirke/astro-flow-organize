
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

type Note = {
  id: string;
  title: string;
  content: string | null;
  created_at: string;
  updated_at: string;
};

const fetchNotes = async (userId: string): Promise<Note[]> => {
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false });
  if (error) throw error;
  return data || [];
};

const insertNote = async (note: { title: string; content: string; user_id: string }) => {
  const { data, error } = await supabase
    .from("notes")
    .insert({
      title: note.title,
      content: note.content,
      user_id: note.user_id
    });
  if (error) throw error;
  return data;
};

const Notes = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  const { data: notes, isLoading, error } = useQuery({
    queryKey: ["notes", user?.id],
    queryFn: () => user ? fetchNotes(user.id) : Promise.resolve([]),
    enabled: !!user,
  });

  const addNoteMutation = useMutation({
    mutationFn: (variables: { title: string; content: string }) =>
      insertNote({ ...variables, user_id: user?.id ?? "" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes", user?.id] });
      setTitle("");
      setContent("");
      toast.success("Note added successfully");
    },
    onError: (error: any) => {
      toast.error(`Failed to add note: ${error.message}`);
    }
  });

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    addNoteMutation.mutate({ title, content });
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="section-title">Your Notes</h1>
      <form onSubmit={handleAddNote} className="mb-6 space-y-3">
        <Input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button type="submit" disabled={addNoteMutation.isPending}>
          {addNoteMutation.isPending ? "Saving..." : "Add Note"}
        </Button>
      </form>
      <div className="space-y-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{String(error)}</div>
        ) : (
          notes?.map(note => (
            <div key={note.id} className="glass-card p-4">
              <div className="font-semibold">{note.title}</div>
              <div className="text-muted-foreground text-sm whitespace-pre-line mt-1">{note.content}</div>
              <div className="text-xs text-muted-foreground mt-2">
                Last updated: {new Date(note.updated_at).toLocaleString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
