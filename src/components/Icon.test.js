import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

test('renders a "desktop icon" with a given name', async () => {
  render(<Icon name="My Computer" />);
  const name = await screen.findByText("My Computer");
  expect(name).toBeVisible;
});
