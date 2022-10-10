import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
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
  act(() => {
    startBtn.click();
  });
  const startMenu = screen.getByAltText("winows 95 logo");
  expect(startMenu).toBeVisible;
});
