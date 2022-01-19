import { render } from "@testing-library/react";
import App from "./App";
import React from "react";

test("checks API call", () => {
  jest.spyOn(React, "useEffect").mockImplementation((f) => {
    return [];
  });
  render(<App />);
  expect(React.useEffect).toBeCalledTimes(2);
});
