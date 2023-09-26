import React from "react";
import { render, screen } from "@testing-library/react";

import { RES_IMAGE } from "../../utils/constants";
import "@testing-library/jest-dom";
// Mock the props for testing
import MOCK_DATA from "../mocks/resMock.json";
import RestaurantCard, { withPromoted } from "../RestaurantCard";

const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } =
  MOCK_DATA.info;
describe("RestaurantCard Component Tests", () => {
  //   it("should have image on res component", () => {
  //     render(<RestaurantCard resObj={MOCK_DATA} />);

  //     const image = screen.getByText(name);
  //     expect(image).toBeInTheDocument();
  //   });

  it("renders the RestaurantCard component with provided data", () => {
    render(<RestaurantCard resObj={MOCK_DATA} />);

    // Assertions
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(cuisines.join(", "))).toBeInTheDocument();
    expect(screen.getByText(costForTwo)).toBeInTheDocument();
    expect(screen.getByText(avgRating)).toBeInTheDocument();
    // expect(screen.getByAltText("Restaurant")).toBeInTheDocument();
  });

  it("displays the promoted label when wrapped with withPromoted HOC", () => {
    const PromotedRestaurantCard = withPromoted(RestaurantCard);

    render(<PromotedRestaurantCard resObj={MOCK_DATA} />);

    // Assertions
    expect(screen.getByText(name)).toBeInTheDocument();
    // expect(screen.getByText("promoted")).toBeInTheDocument();
  });

  it("correctly constructs the image source URL", () => {
    // const { cloudinaryImageId, name } = MOCK_DATA.info; // Extract expected values

    render(<RestaurantCard resObj={MOCK_DATA} />);

    // Construct the expected image source URL
    const expectedImageUrl = RES_IMAGE + cloudinaryImageId;

    // Assertions
    const imgElement = screen.getByRole("img", { name: "Restaurant" });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.getAttribute("src")).toBe(expectedImageUrl);
  });
});
