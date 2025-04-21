
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Root", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByText(/Think better with AstroNote/i)
    ).toBeInTheDocument();
  });
});
