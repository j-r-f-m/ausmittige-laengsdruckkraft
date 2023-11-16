import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Berechnungsansatz from "./Berechnungsansatz";

describe("Berechnungsansatz component", () => {
  it("renders the heading", () => {
    render(<Berechnungsansatz />);
    const heading = screen.getByRole("heading", { level: 5 });
    expect(heading).toHaveTextContent("Berechnungsansatz");
  });

  it("renders the image", () => {
    render(<Berechnungsansatz />);
    const image = screen.getByAltText("Grafik");
    expect(image).toBeInTheDocument();
  });

  it("renders the text", () => {
    render(<Berechnungsansatz />);
    const text = screen.getByText(
      "Bei schrägem Kraftangriff wird empfohlen, die gesamte Randzugkraft aus der Horizontalkomponente der schrägen Kraft und der Randzugkraft aus exzentrischer Lasteinleitung durch Bewehrung abzudecken (siehe auch Schlaich/Schäfer (2001), Kapitel 4.5)."
    );
    expect(text).toBeInTheDocument();
  });
});
