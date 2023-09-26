import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListMockDa.json";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
describe("test for search", () => {
  it("should render body component with search button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("should show restaurants cards of search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const card = screen.getAllByTestId("resCard");

    expect(card.length).toBe(9);
    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(2);
  });

  it("should show restaurants cards of top rated restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const card = screen.getAllByTestId("resCard");

    expect(card.length).toBe(9);

    const searchBtn = screen.getByRole("button", {
      name: "top rated restaurant",
    });

    // const searchInput = screen.getByTestId("searchInput");
    // fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);

    const cards = screen.getAllByTestId("resCard");

    expect(cards.length).toBe(7);
  });
});
