import { selectOffers, initialState } from "./offersSlice";
import { GlobalStateProps } from "../../models";

describe("offersSlice", () => {
  it("selectOffers", () => {
    const globalState: GlobalStateProps = {
      offers: initialState,
    };
    expect(selectOffers(globalState)).toEqual(initialState.list);
  });
});
