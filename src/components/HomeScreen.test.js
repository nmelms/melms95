import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import HomeScreen from "./HomeScreen";

test("renders a start menu", async () => {
  render(<HomeScreen />);
  const startMenu = await screen.findByText("Start");
  expect(startMenu).toBeVisible();
});

test("opens Start menu when start button is click", async () => {
  render(<HomeScreen />);
  const startBtn = await screen.findByRole("button", { name: "Start" });
  act(() => {
    startBtn.click();
  });
  const startMenu = await screen.findByText("StartMenu");
  expect(startMenu).toBeVisible;
});
