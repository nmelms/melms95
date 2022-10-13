import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

test("renders a navbar that says projects", async () => {
  render(<Projects />);
  const nav = screen.getByTestId("nav");
  expect(nav).toBeVisible();
});
