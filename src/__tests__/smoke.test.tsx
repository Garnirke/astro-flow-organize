
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App Root", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByText(/Think better with AstroNote/i)
    ).toBeInTheDocument();
  });
});
