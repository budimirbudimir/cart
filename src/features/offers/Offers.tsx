import React from "react";
import { useSelector } from "react-redux";

import { selectOffers } from "./offersSlice";
import Module from "./Module";
import { OfferProps, OffersProps } from "../../models";

export function Offers() {
  const offers: OffersProps = useSelector(selectOffers);

  return (
    <>
      {offers.map((o: OfferProps) => (
        <Module key={o.name} {...o} />
      ))}
    </>
  );
}

export default Offers;
