import React, { useState, useContext } from "react";
import DeliveryListContext from "../../context/appContext";
import NumberFormat from "react-number-format";
import "./DeliveryItem.scss";

function DeliveryItem(props) {
  const { removeItemDeliveryList, modifyQuantityItemDeliveryList } = useContext(
    DeliveryListContext
  );

  const { name, price, id, units } = props.itemData;

  const [valueInput, setValueInput] = useState(units);

  const [total, setTotal] = useState(price);

  function handleRemoveItem(e) {
    const { id } = e.target;
    return removeItemDeliveryList(id);
  }

  function handleNumberItems(e) {
    const { value } = e.target;
    let totalPrice = value > 0 ? price * value : price;
    setValueInput(value > -1 ? value : 0);
    setTotal(totalPrice);
    return modifyQuantityItemDeliveryList(id, value);
  }

  return (
    <div className="delivery-item">
      <div className="delivery-item__product">
        <button
          className="delivery-item__remove"
          id={id}
          onClick={handleRemoveItem}
        >
          &times;
        </button>
        <span className="delivery-item__name">{name}</span>
      </div>

      <div className="delivery-item__amount">
        <input
          id={id}
          type="number"
          value={valueInput}
          onChange={handleNumberItems}
          className="delivery-item__amount-input"
        />
      </div>

      <NumberFormat
        className="delivery-item__price"
        value={price}
        displayType={"text"}
        prefix={"$ "}
        thousandSeparator={"."}
        decimalSeparator={","}
        decimalScale={2}
        maxLength="12"
      />
      <NumberFormat
        className="delivery-item__total"
        value={total}
        displayType={"text"}
        prefix={"$ "}
        thousandSeparator={"."}
        decimalSeparator={","}
        decimalScale={2}
        maxLength="12"
      />
    </div>
  );
}

export default DeliveryItem;
