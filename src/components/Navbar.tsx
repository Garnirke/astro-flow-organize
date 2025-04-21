import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white px-4 py-3 flex items-center sticky top-0 z-50">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <a href="/" className="text-xl font-bold text-primary">Astronote</a>
        <div className="flex gap-6 items-center">
          <a href="/notes" className="hover:text-primary">Notes</a>
          <a href="/tasks" className="hover:text-primary">Tasks</a>
          <a href="/schedule" className="hover:text-primary">Schedule</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
