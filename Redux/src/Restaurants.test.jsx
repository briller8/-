import React from "react";
import { render } from "@testing-library/react";
import Restaurants from "./Restaurants";
import restaurants from "../fixtures/restaurants";

test("Restaurants", () => {
  const { getByText } = render(<Restaurants restaurants={restaurants} />);

  expext(getByText(/도쿄등심/)).not.toBeNull();
});
