
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";

const Profile = () => {
  const { user, profile, refreshProfile } = useAuth();
  const [username, setUsername] = useState(profile?.username ?? "");
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url ?? "");
  const [loading, setLoading] = useState(false);

  if (!user) return <div className="p-8">You must be logged in.</div>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Use type assertion to bypass TypeScript error
      const { error } = await supabase
        .from("profiles" as any)
        .update({
          username,
          avatar_url: avatarUrl
        } as any)
        .eq("id", user.id);
        
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Profile updated");
        await refreshProfile();
      }
    } catch (error: any) {
      toast.error(error.message || "Error updating profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 glass-card p-6">
      <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium" htmlFor="username">Username</label>
          <Input
            id="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="avatar">Avatar URL</label>
          <Input
            id="avatar"
            placeholder="Avatar image url"
            value={avatarUrl}
            onChange={e => setAvatarUrl(e.target.value)}
          />
        </div>
        <Button type="submit" disabled={loading}>{loading ? "Saving..." : "Save"}</Button>
      </form>
    </div>
  );
};

export default Profile;
