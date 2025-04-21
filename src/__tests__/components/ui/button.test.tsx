
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  it("renders with default variant", () => {
    render(<Button>Click Me</Button>);
    
    const button = screen.getByRole("button", { name: /Click Me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
  });

  it("renders with secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    
    const button = screen.getByRole("button", { name: /Secondary/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-secondary");
  });

  it("renders with outline variant", () => {
    render(<Button variant="outline">Outline</Button>);
    
    const button = screen.getByRole("button", { name: /Outline/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("border-input");
  });

  it("renders in different sizes", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    
    let button = screen.getByRole("button", { name: /Small/i });
    expect(button).toHaveClass("h-9");
    
    rerender(<Button size="lg">Large</Button>);
    button = screen.getByRole("button", { name: /Large/i });
    expect(button).toHaveClass("h-11");
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    
    const button = screen.getByRole("button", { name: /Click Me/i });
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("can be disabled", () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    
    const button = screen.getByRole("button", { name: /Disabled/i });
    expect(button).toBeDisabled();
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
