import * as React from "react";
import { useDispatch } from "react-redux";
import NoUISlider from "react-nouislider";
import "react-nouislider/example/nouislider.css";

import { updateOffer } from "./offersSlice";
import calculatePrice from "../../utils/calculatePrice";
import { OfferProps } from "../../models/index";
import styles from "./Offers.module.css";

const OfferModule = ({
  name,
  coverage,
  risk,
  selected,
}: OfferProps) => {
  const dispatch = useDispatch();

  const price = calculatePrice({ coverage, risk, name, selected });

  const handleOnEnd = ([current]: string[]) => {
    dispatch(
      updateOffer({
        name,
        risk,
        selected,
        coverage: {
          ...coverage,
          current: parseInt(current),
        },
      })
    );
    if (parseInt(current) === 0) {
      dispatch(
        updateOffer({
          name,
          risk,
          coverage,
          selected: !selected,
        })
      );
    }
  };

  const handleToggleSelection = () => {
    dispatch(
      updateOffer({
        name,
        risk,
        coverage,
        selected: !selected,
      })
    );
  };

  return (
    <div
      className={styles.module}
      style={{ background: selected ? "lightgreen" : "white" }}
      onClick={handleToggleSelection}
    >
      <div>
        <b>{name} Insurance</b>
      </div>
      <br />
      <div className={styles.slider}>
        <NoUISlider
          range={{ min: coverage.min, max: coverage.max }}
          start={[coverage.current]}
          step={1}
          tooltips
          onEnd={handleOnEnd}
        />
      </div>
      <p>Coverage: {coverage.current} EUR</p>
      <p>Risk: {risk}%</p>
      <p>
        Price: <b>{price.toFixed(2)} EUR</b>
      </p>
    </div>
  );
};

export default OfferModule;
