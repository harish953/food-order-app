import { render, screen } from "@testing-library/react";
import Contact from "../contact";
import "@testing-library/jest-dom";

describe("it cases for Contact", () => {
  it("should render headings", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertions
    expect(heading).toBeInTheDocument;
  });
  it("should render button", () => {
    render(<Contact />);
    const heading = screen.getByRole("button");
    //Assertions
    expect(heading).toBeInTheDocument();
  });
  it("should have text submit", () => {
    render(<Contact />);
    const heading = screen.getByText("Submit");
    //Assertions
    expect(heading).toBeInTheDocument();
  });
  it("should load input placeholder ", () => {
    render(<Contact />);
    const heading = screen.getByPlaceholderText("Name");
    //Assertions
    expect(heading).toBeInTheDocument();
  });
  it("should load  2 input box", () => {
    render(<Contact />);
    const heading = screen.getAllByRole("textbox");
    //Assertions
    expect(heading.length).toBe(2);
  });
});
