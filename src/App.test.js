import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("smoke test for App component", () => {
  render(<App />);
});

test("snapshot test for App component", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
