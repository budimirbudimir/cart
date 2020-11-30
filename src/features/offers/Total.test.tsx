import React from "react";
import { render } from "@testing-library/react";

import Total from "./Total";
import { Provider } from "react-redux";
import store from "../../app/store";

describe("Total", () => {
  test("should display render a total component", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Total />
      </Provider>
    );

    expect(getByText(/Total:/i)).toBeInTheDocument();
  });
});
