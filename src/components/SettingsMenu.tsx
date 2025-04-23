
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SettingsMenu = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const { theme, setTheme } = useTheme();

  return open ? (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black/30">
      <div className="bg-popover text-popover-foreground rounded-2xl shadow-2xl border border-border w-full max-w-xs p-6 relative">
        <button
          className="absolute top-3 right-3 text-muted-foreground"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex items-center gap-3 mb-4">
          <Settings className="w-5 h-5" />
          <span className="font-semibold text-lg">Settings</span>
        </div>
        <div className="flex items-center justify-between py-4">
          <span className="flex items-center gap-2">
            <Moon className="w-4 h-4 text-astro-purple" />
            <span>Dark mode</span>
          </span>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            aria-label="Toggle dark mode"
          />
        </div>
        <Button variant="outline" className="w-full mt-6" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  ) : null;
};
