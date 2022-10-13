import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

test("renders a navbar that says projects", async () => {
  render(<Projects />);
  const nav = screen.getByTestId("nav");
  expect(nav).toBeVisible();
});

test("renders a national park project icon", async () => {
  render(<Projects />);
  const nps = await screen.findByAltText("national parks project");
  expect(nps).toBeVisible();
});

test("renders a planet facts project icon", async () => {
  render(<Projects />);
  const project = await screen.findByAltText("planet facts project");
  expect(project).toBeVisible();
});
test("renders an invoice project icon", async () => {
  render(<Projects />);
  const project = await screen.findByAltText("invoice project");
  expect(project).toBeVisible();
});
