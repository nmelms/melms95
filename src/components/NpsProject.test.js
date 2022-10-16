import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NpsProject from "./NpsProject";

test("renders a National Parks Project", async () => {
  render(<NpsProject />);
  const heading = await screen.findByText("Explore National Parks");
  expect(heading).toBeVisible();
});

test("correct github url for nps project", async () => {
  render(<NpsProject />);
  const icon = await screen.findByTitle("github icon");
  const link = icon.closest("a");
  expect(link).toHaveAttribute(
    "href",
    "https://github.com/Nmelms/national-parks"
  );
});

test("correct live url  for nps project", async () => {
  render(<NpsProject />);
  const icon = await screen.findByTitle("live project link");
  const link = icon.closest("a");
  expect(link).toHaveAttribute("href", "https://nmelmsnps.netlify.app");
});
