
import { render, renderHook, act, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";

// Mock Supabase
vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          single: vi.fn(() => ({
            data: null,
            error: null
          }))
        }))
      }))
    })),
    auth: {
      getSession: vi.fn().mockResolvedValue({
        data: { session: null }
      }),
      onAuthStateChange: vi.fn((callback) => {
        // Store callback to trigger later if needed in tests
        (global as any).authStateChangeCallback = callback;
        return {
          data: { subscription: { unsubscribe: vi.fn() } }
        };
      }),
      signOut: vi.fn().mockResolvedValue({ error: null })
    }
  }
}));

describe("AuthContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("provides the auth context correctly", async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    );
    
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    // Initial state
    expect(result.current.user).toBeNull();
    expect(result.current.loading).toBeTruthy();
    
    // Wait for the initial auth check to complete
    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
    });
  });

  it("provides signOut functionality", async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthProvider>{children}</AuthProvider>
    );
    
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    // Wait for initial auth check
    await waitFor(() => {
      expect(result.current.loading).toBeFalsy();
    });
    
    // Call signOut
    await act(async () => {
      await result.current.signOut();
    });
    
    // Verify the Supabase signOut was called
    expect(supabase.auth.signOut).toHaveBeenCalled();
  });
});
