import React from "react";
import { useSelector } from "react-redux";

import { selectOffers } from "./offersSlice";
import calculatePrice from "../../utils/calculatePrice";
import calculateTotal from "../../utils/calculateTotal";

import styles from "./Offers.module.css";

export function Total() {
  const offers = useSelector(selectOffers);
  const selectedOffers = offers.filter((o) => o.selected);
  const selectedPrices = selectedOffers.map((o) => calculatePrice(o));
  const total = calculateTotal(selectedPrices);

  return (
    <div className={styles.cart}>
      {selectedOffers.length > 0 && (
        <div className={styles.totalItem}>
          <div>
            <b>Name</b>
          </div>
          <div>
            <b>Coverage</b>
          </div>
          <div>
            <b>Risk</b>
          </div>
          <div>
            <b>Price</b>
          </div>
        </div>
      )}
      {selectedOffers.filter(o => {
        return o.coverage.current !== 0
      }).map((o) => (
        <div className={styles.totalItem} key={o.name}>
          <div>{o.name} Insurance</div>
          <div>{o.coverage.current.toFixed(2)} EUR</div>
          <div>{o.risk} %</div>
          <div>{calculatePrice(o).toFixed(2)} EUR</div>
        </div>
      ))}
      <h3>Total: {total.toFixed(2)} EUR</h3>
    </div>
  );
}

export default Total;
