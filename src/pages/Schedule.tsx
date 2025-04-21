
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";

type Event = {
  id: string;
  title: string;
  date: string;
  user_id: string;
};

const Schedule = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const fetchEvents = async (userId: string): Promise<Event[]> => {
    try {
      // Use type assertion to bypass TypeScript error since database schema isn't fully typed
      const { data, error } = await supabase
        .from("events" as any)
        .select("*")
        .eq("user_id", userId)
        .order("date", { ascending: false });
      if (error) throw error;
      // Add explicit type assertion with unknown as intermediate step
      return ((data || []) as unknown) as Event[];
    } catch (error: any) {
      console.error("Error fetching events:", error.message);
      return [];
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
      return;
    }
    if (!user) return;
    fetchEvents(user.id).then(setEvents).catch(() => setEvents([]));
    // eslint-disable-next-line
  }, [user, loading]);

  const addEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !user) return;
    try {
      // Use type assertion to bypass TypeScript error
      await supabase
        .from("events" as any)
        .insert({ title, date, user_id: user.id } as any);
      const updated = await fetchEvents(user.id);
      setEvents(updated);
      setTitle("");
      setDate("");
      toast.success("Event added");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="section-title">Schedule</h1>
      <form onSubmit={addEvent} className="mb-6 space-y-2">
        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Event title"
        />
        <Input
          value={date}
          onChange={e => setDate(e.target.value)}
          placeholder="Date (e.g. 2025-04-20)"
          type="date"
        />
        <Button type="submit">Add event</Button>
      </form>
      <ul className="space-y-2">
        {events.map(event => (
          <li key={event.id} className="glass-card p-3 flex flex-col">
            <span className="font-medium">{event.title}</span>
            <span className="text-muted-foreground text-xs">{event.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
