import React from "react";
import { render } from "@testing-library/react";
import Sidebar from "./Sidebar";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    hash: "",
    key: "suj70f",
    pathname: "/inbox",
    search: "",
    state: undefined,
  }),
}));
test("renders the sidebar menu items", () => {
  const { getAllByTestId } = render(<Sidebar />);
  expect(getAllByTestId("list-item")).toHaveLength(3);
});
