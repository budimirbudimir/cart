import calculatePrice from "./calculatePrice";

describe("calculatePrice", () => {
  it("Calculate price from received data", () => {
    const offer = {
      coverage: {
        min: 0,
        max: 20000,
        current: 20000,
      },
      risk: 30,
      name: "Bike",
      selected: true,
    };
    expect(calculatePrice(offer)).toEqual(6000);
  });
  it("Calculate price from received data", () => {
    const offer = {
      coverage: {
        min: 500,
        max: 5000,
        current: 1000,
      },
      risk: 30,
      name: "Bike",
      selected: true,
    };
    expect(calculatePrice(offer)).toEqual(300);
  });
});
