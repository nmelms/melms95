import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import StartMenu from "./StartMenu";

test("renders windows95 text", async () => {
  render(<StartMenu />);
  const windows = screen.getByAltText("windows 95 logo");
  expect(windows).toBeVisible();
});

test("renders a shutdown icon", () => {
  render(<StartMenu />);
  const shutdownIcon = screen.getByAltText("shutdown icon");
  expect(shutdownIcon).toBeVisible();
});

test("renders a linkedin icon", () => {
  render(<StartMenu />);
  const linkedinIcon = screen.getByAltText("linkedin icon");
  expect(linkedinIcon).toBeVisible();
});

test("renders a github icon", () => {
  render(<StartMenu />);
  const githubIcon = screen.getByAltText("github icon");
  expect(githubIcon).toBeVisible();
});

test("renders a github icon", () => {
  render(<StartMenu />);
  const emailIcon = screen.getByAltText("email icon");
  expect(emailIcon).toBeVisible();
});

test("renders a resume icon", () => {
  render(<StartMenu />);
  const folderIcon = screen.getByAltText("folder icon");
  expect(folderIcon).toBeVisible();
});
