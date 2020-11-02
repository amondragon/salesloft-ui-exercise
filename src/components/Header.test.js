import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

const getProps = () => ({
  searchHandler: jest.fn(),
});

test("calls the searchHandler function when input is changed", () => {
  const props = getProps();
  const { getByTestId } = render(<Header {...props} />);
  userEvent.type(getByTestId("search-input"), "Alex");
  expect(props.searchHandler).toHaveBeenCalledWith("Alex");
});
