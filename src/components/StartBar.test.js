import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import StartBar from "./StartBar";

test("renders a button that says start", async () => {
  render(<StartBar />);
  const startBtn = await screen.findByRole("button", { name: "Start" });
  expect(startBtn).toBeVisible;
});

test("renders a clock", async () => {
  render(<StartBar />);
  const clock = await screen.findByTestId("clock");
  expect(clock).toBeVisible;
});
