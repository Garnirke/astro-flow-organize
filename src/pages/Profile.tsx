
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";
import { TabsContent } from "@/components/ui/tabs";
import { ProfileTabs } from "@/components/profile/ProfileTabs";
import { PersonalInfo } from "@/components/profile/PersonalInfo";
import { ProfessionalInfo } from "@/components/profile/ProfessionalInfo";
import { Card, CardContent } from "@/components/ui/card";

const Profile = () => {
  const { user, profile, refreshProfile } = useAuth();
  const [username, setUsername] = useState(profile?.username ?? "");
  const [avatarUrl, setAvatarUrl] = useState(profile?.avatar_url ?? "");
  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState("");

  if (!user) return <div className="p-8">You must be logged in.</div>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          username,
          avatar_url: avatarUrl
        })
        .eq('id', user.id);
        
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
    <div className="container mx-auto py-6 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Profile</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <ProfileTabs>
        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={profile?.avatar_url ?? ""} />
                  <AvatarFallback>{profile?.username?.slice(0, 2)?.toUpperCase() ?? "U"}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-semibold">{profile?.username || user.email}</h2>
                  <p className="text-muted-foreground">Student • Freelancer</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <PersonalInfo />
        </TabsContent>

        <TabsContent value="information" className="space-y-6">
          <ProfessionalInfo />
          <Card className="border-none shadow-none">
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">About You</h3>
                  <Textarea 
                    placeholder="Tell us about yourself..."
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="text-right text-sm text-muted-foreground mt-1">
                    {about.length}/120 words
                  </div>
                </div>
                <Button type="submit" disabled={loading}>
                  {loading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscription">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Subscription & Payments</h3>
              <p className="text-muted-foreground">Manage your subscription and payment methods</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Notification Preferences</h3>
              <p className="text-muted-foreground">Manage your notification settings</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold">Security Settings</h3>
              <p className="text-muted-foreground">Manage your account security</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="close">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-destructive">Close Account</h3>
              <p className="text-muted-foreground">Permanently delete your account and all data</p>
            </CardContent>
          </Card>
        </TabsContent>
      </ProfileTabs>
    </div>
  );
};

export default Profile;
