import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import HomeScreen from "./HomeScreen";

test("renders a start menu", async () => {
  render(<HomeScreen />);
  const startMenu = await screen.findByText("Start");
  expect(startMenu).toBeVisible();
});

test("renders a mycomputer icon", async () => {
  render(<HomeScreen />);
  const computer = screen.getByAltText("bio");
  expect(computer).toBeVisible();
});

test("renders a recycle bin icon", async () => {
  render(<HomeScreen />);
  const recycle = screen.getByAltText("recycle bin");
  expect(recycle).toBeVisible();
});

test("opens Start menu when start button is click", async () => {
  render(<HomeScreen />);
  const startBtn = await screen.findByRole("button", { name: "Start" });
  userEvent.click(startBtn);
  const startMenu = screen.getByAltText("windows 95 logo");
  expect(startMenu).toBeVisible();
});

test("opens and closes bio window on click", async () => {
  render(<HomeScreen />);
  const bioText = await screen.findByText("My Bio");
  const bioIcon = bioText.parentNode;
  userEvent.click(bioIcon);
  const bioWindow = screen.getByTestId("Window");
  expect(bioWindow).toBeVisible();
  const closeBtn = await screen.findByRole("button", { name: "X" });
  userEvent.click(closeBtn);
  expect(bioWindow).not.toBeVisible();
});

test("opens and closes projects window on click", async () => {
  render(<HomeScreen />);
  const projectText = await screen.findByText("Projects");
  const projectIcon = projectText.parentNode;
  userEvent.click(projectIcon);
  const projectsWindow = screen.getByTestId("projectsWindow");
  expect(projectsWindow).toBeVisible();
  const closeBtn = await screen.findByRole("button", { name: "X" });
  userEvent.click(closeBtn);
  expect(projectsWindow).not.toBeVisible();
});

test("opens and closes nps project window on click", async () => {
  render(<HomeScreen />);
  const projectText = await screen.findByText("Projects");
  const projectIcon = projectText.parentNode;
  userEvent.click(projectIcon);
  const npsText = await screen.findByText("National Parks");
  const npsProject = projectText.parentNode;
  userEvent.click(npsText);
  const h1 = await screen.findByText("Explore National Parks");
  expect(h1).toBeVisible();
  const button = screen.getByTestId("npsClose");
  userEvent.click(button);
  expect(h1).not.toBeVisible();
});
