export default (prices: number[]): number =>
  prices.reduce((acc, curr) => acc + curr, 0);
