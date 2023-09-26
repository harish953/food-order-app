import React from "react";
import { render, screen } from "@testing-library/react";

import { RES_IMAGE } from "../../utils/constants";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import MOCK_DATA from "../mocks/resMenuMock.json";
import RestaurantMenu from "../RestaurantMenu";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA.data),
  })
);
const { name, cuisines } = MOCK_DATA.data?.cards[0]?.card?.card?.info;
describe("test cases for Cart", () => {
  //   it("displays restaurant information after data is fetched", async () => {
  //     await act(async () =>
  //       render(
  //         <Provider store={appStore}>
  //           <RestaurantMenu />
  //         </Provider>
  //       )
  //     );
  //     // Replace these queries with actual content in your component
  //     const restaurantName = screen.getByText("McDonald's");
  //     const cuisines = screen.getByText("American");

  //     expect(restaurantName).toBeInTheDocument();
  //     expect(cuisines).toBeInTheDocument();
  //   });

  it("should load Restaurant Menu Component", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      )
    ); //
    const accordion = screen.getByText((content, element) => {
      // Check if the text includes "Recommended(14)" (case insensitive)
      const normalizedContent = content.toLowerCase();
      const normalizedText = "recommended(14)";
      return (
        normalizedContent.includes(normalizedText) ||
        (element &&
          element.textContent &&
          element.textContent.toLowerCase().includes(normalizedText)) ||
        (element &&
          element.innerText &&
          element.innerText.toLowerCase().includes(normalizedText))
      );
    });

    expect(accordion).toBeInTheDocument();
    // });
    // In this code, I've updated the normalizedText to "recommended(14)" to match the exact text you are searching for in a case-insensitive manner. This should help you find the element with the text "Recommended(14)" in your test case.
  });
});
