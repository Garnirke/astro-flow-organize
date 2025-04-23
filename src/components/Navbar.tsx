
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { SettingsMenu } from "@/components/SettingsMenu";

const Navbar = () => {
  const { user, profile, signOut, loading } = useAuth();
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <nav className="w-full border-b bg-background px-4 py-3 flex items-center sticky top-0 z-50">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <a href="/" className="text-xl font-bold text-primary">Astronote</a>
          <div className="flex gap-6 items-center">
            <a href="/notes" className="hover:text-primary">Notes</a>
            <a href="/tasks" className="hover:text-primary">Tasks</a>
            <a href="/schedule" className="hover:text-primary">Schedule</a>
            <Button
              size="icon"
              variant="ghost"
              aria-label="Settings"
              onClick={() => setShowSettings(true)}
              className="ml-1"
            >
              <Settings className="w-5 h-5" />
            </Button>
            {!loading && user ? (
              <div className="flex items-center gap-2">
                <a href="/profile" className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={profile?.avatar_url || undefined} alt={profile?.username ?? "User"} />
                    <AvatarFallback>{profile?.username?.slice(0,2)?.toUpperCase() ?? "U"}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{profile?.username ?? user.email}</span>
                </a>
                <Button size="sm" variant="outline" onClick={signOut}>Log out</Button>
              </div>
            ) : (
              <a
                href="/auth"
                className="px-3 py-2 rounded font-medium bg-primary text-primary-foreground hover:bg-primary/90 ml-2"
              >
                Log in
              </a>
            )}
          </div>
        </div>
      </nav>
      <SettingsMenu open={showSettings} onClose={() => setShowSettings(false)} />
    </>
  );
};

export default Navbar;
