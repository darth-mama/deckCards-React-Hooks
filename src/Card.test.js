import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

const cardProps = {
  name: "HEARTS 10",
  image: "https://deckofcardsapi.com/static/img/0H.png",
};

test("smoke test for Card component", () => {
  render(<Card {...cardProps} />);
});

test("snapshot test for Card component", () => {
  const { asFragment } = render(<Card {...cardProps} />);
  expect(asFragment()).toMatchSnapshot();
});
