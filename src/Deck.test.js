import React from "react";
import { render, waitFor } from "@testing-library/react";
import Deck from "./Deck";
import axios from "axios";

jest.mock("axios");

test("smoke test for Deck component", async () => {
  axios.get.mockResolvedValue({ data: { deck_id: "test-deck-id" } });
  render(<Deck />);
});

test("snapshot test for Deck component", async () => {
  axios.get.mockResolvedValue({ data: { deck_id: "test-deck-id" } });
  const { asFragment } = render(<Deck />);
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  expect(asFragment()).toMatchSnapshot();
});
