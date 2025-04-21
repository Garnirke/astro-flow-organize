
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { BrowserRouter } from "react-router-dom";
import Schedule from "@/pages/Schedule";
import { AuthProvider } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";

// Mock Supabase
vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          order: vi.fn(() => ({
            data: [],
            error: null
          }))
        }))
      })),
      insert: vi.fn(() => ({
        data: null, 
        error: null
      }))
    })),
    auth: {
      getSession: vi.fn().mockResolvedValue({
        data: { session: null }
      }),
      onAuthStateChange: vi.fn(() => ({
        data: { subscription: { unsubscribe: vi.fn() } }
      }))
    }
  }
}));

// Mock navigate
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => vi.fn()
  };
});

describe("Schedule Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the schedule page title", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Schedule />
        </AuthProvider>
      </BrowserRouter>
    );
    
    expect(screen.getByText("Schedule")).toBeInTheDocument();
  });

  it("shows the event input fields", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <Schedule />
        </AuthProvider>
      </BrowserRouter>
    );
    
    expect(screen.getByPlaceholderText("Event title")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Date (e.g. 2025-04-20)")).toBeInTheDocument();
  });
});
