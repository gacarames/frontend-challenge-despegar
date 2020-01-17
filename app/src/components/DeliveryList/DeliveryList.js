import React from "react";
import DeliveryItem from "../DeliveryItem/DeliveryItem";
import "./DeliveryList.scss";
import NumberFormat from "react-number-format";

function DeliveryList(props) {
  const { mergedArray } = props.delivery;

  let totalOrderCost =
    mergedArray && mergedArray.reduce((total, item) => total + (item.price * item.units), 0);

  return (
    <>
      <div className="delivery-list">
        <div className="delivery-list__heading">
          <span className="delivery-list__head-col col--product">Producto</span>
          <span className="delivery-list__head-col col--amount">Cant.</span>
          <span className="delivery-list__head-col col--price">Precio</span>
          <span className="delivery-list__head-col col--total">Total</span>
        </div>

        <div className="delivery-list__body">
          {mergedArray &&
            mergedArray.map(item => {
              return <DeliveryItem itemData={item} key={item.id} />;
            })}
        </div>

        <div className="delivery-list__total">
          <div className="delivery-list__total-heading">TOTAL</div>
          <div className="delivery-list__total-view">
            <NumberFormat
              className="delivery-item__price"
              value={totalOrderCost}
              displayType={"text"}
              prefix={"$ "}
              thousandSeparator={"."}
              decimalSeparator={","}
              decimalScale={2}
              maxLength="12"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryList;
