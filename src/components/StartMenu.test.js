import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import StartMenu from "./StartMenu";

test("renders windows95 text", async () => {
  render(<StartMenu />);
  const windows = await screen.findByText("Windows95");
  expect(windows).toBeVisible();
});
