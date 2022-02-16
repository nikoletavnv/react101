import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app", () => {
  render(<App />);
  const headerText = screen.getByText(/react 101/i);
  expect(headerText).toBeInTheDocument();
});
