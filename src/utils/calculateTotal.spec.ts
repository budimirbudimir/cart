import calculateTotal from "./calculateTotal";

describe("calculateTotal", () => {
  it("Calculate total from array of prices", () => {
    const prices = [1, 2, 3, 4];
    expect(calculateTotal(prices)).toEqual(10);
  });
});
