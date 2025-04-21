
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// In-memory schedule event model, ready for DB
type Event = {
  id: string;
  title: string;
  date: string;
};

const Schedule = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const addEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date) return;
    setEvents([
      ...events,
      { id: Date.now().toString(), title, date }
    ]);
    setTitle("");
    setDate("");
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
