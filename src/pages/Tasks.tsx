
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Sample in-memory tasks; DB will be implemented later
type Task = {
  id: string;
  title: string;
  done: boolean;
};

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    setTasks([
      ...tasks,
      { id: Date.now().toString(), title, done: false }
    ]);
    setTitle("");
  };

  const toggleTask = (id: string) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
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
