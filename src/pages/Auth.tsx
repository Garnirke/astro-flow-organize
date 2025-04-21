
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
import { Loader2 } from "lucide-react";

const loginProviders = [
  { key: "google", label: "Google" },
  { key: "github", label: "GitHub" },
  { key: "twitter", label: "Twitter" }
];

const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setError] = useState("");

  // If user is logged in, auto redirect
  // Using local storage auth state
  useState(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) navigate("/");
    });
  });

  const handleSocial = async (provider: string) => {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithOAuth({ provider: provider as any });
    if (error) {
      setError(error.message);
      setLoading(false);
    }
    // Supabase will redirect to your app after login/signup
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    let result;
    if (isSignUp) {
      result = await supabase.auth.signUp({ email, password });
    } else {
      result = await supabase.auth.signInWithPassword({ email, password });
    }
    if (result.error) {
      setError(result.error.message);
      toast.error(result.error.message);
    } else {
      toast.success("Success! Please check your email if prompted.");
      navigate("/");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm bg-white border glass-card rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">{isSignUp ? "Sign Up" : "Log In"}</h1>
        <form onSubmit={handleEmailAuth} className="space-y-3 mb-3">
          <Input
            placeholder="Email"
            type="email"
            value={email}
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            autoComplete={isSignUp ? "new-password" : "current-password"}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button
            className="w-full"
            type="submit"
            disabled={loading}
          >
            {loading && <Loader2 className="animate-spin w-4 h-4 mr-1" />}
            {isSignUp ? "Sign Up" : "Log In"}
          </Button>
        </form>
        <div className="flex flex-col gap-2 mb-3">
          {loginProviders.map(p => (
            <Button
              key={p.key}
              variant="outline"
              className="w-full justify-center"
              onClick={() => handleSocial(p.key)}
              disabled={loading}
              type="button"
            >
              {loading && <Loader2 className="animate-spin w-4 h-4 mr-1" />}
              {isSignUp ? "Sign up with " : "Sign in with "} {p.label}
            </Button>
          ))}
        </div>
        {errorMsg && <div className="text-red-500 mb-2 text-sm">{errorMsg}</div>}
        <div className="text-muted-foreground text-xs text-center">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="underline ml-1"
            disabled={loading}
            onClick={() => setIsSignUp(s => !s)}
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Auth;
