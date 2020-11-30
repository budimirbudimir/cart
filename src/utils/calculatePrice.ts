import { OfferProps } from "../models";

export default ({ coverage, risk }: OfferProps): number =>
  coverage.current * (risk / 100);
