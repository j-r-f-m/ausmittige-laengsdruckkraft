import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the header", () => {
    render(<Header />);
    const titleElement = screen.getByText(/Bemessungshilfe/i);
    expect(titleElement).toBeInTheDocument();
  });
});
