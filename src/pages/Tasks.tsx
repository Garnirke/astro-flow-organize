
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";

type Task = {
  id: string;
  title: string;
  done: boolean;
  user_id: string;
};

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const fetchTasks = async (userId: string): Promise<Task[]> => {
    try {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", userId)
        .order("id", { ascending: false });
      if (error) throw error;
      return (data || []) as Task[];
    } catch (error: any) {
      console.error("Error fetching tasks:", error.message);
      return [];
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    } else if (user) {
      fetchTasks(user.id).then(setTasks).catch(() => setTasks([]));
    }
    // eslint-disable-next-line
  }, [user, loading]);

  const addTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !user) return;
    try {
      await supabase
        .from("tasks")
        .insert({ title, done: false, user_id: user.id });
      const updated = await fetchTasks(user.id);
      setTasks(updated);
      setTitle("");
      toast.success("Task added");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const toggleTask = async (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (!task || !user) return;
    try {
      await supabase
        .from("tasks")
        .update({ done: !task.done })
        .eq("id", id);
      const updated = await fetchTasks(user.id);
      setTasks(updated);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="section-title">Tasks</h1>
      <form onSubmit={addTask} className="mb-6 flex gap-2">
        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="New task"
        />
        <Button type="submit">Add</Button>
      </form>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="accent-primary"
            />
            <span className={task.done ? "line-through text-muted-foreground" : ""}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
