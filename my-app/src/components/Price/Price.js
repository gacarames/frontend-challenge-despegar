import React from 'react';
import './Price.scss';

function Price(props) {

  const { currency, amount, decimals } = props.price

  const decimal = (decimals.toFixed(2) + "").split(".")[1]

  return (
    <span className="price">
      <span className="price__currency">
        {currency === 'ARS' ? '$' : currency}
      </span>
      <span className="price__value">
        {amount}
        {decimals > 0 && (<sup className="price__decimal">{decimal}</sup>)}
      </span>
    </span>
  )
};

export default Price;
