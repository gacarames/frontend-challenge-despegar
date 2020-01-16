import React, { useContext } from "react";
import NumberFormat from "react-number-format";
import DeliveryListContext from "../../context/appContext";
import "./MenuItem.scss";

function MenuItem(props) {
  const { itemsDelivery, addItemDeliveryList } = useContext(
    DeliveryListContext
  );

  const { name, description, price, id } = props.itemData;

  function handleAddItem(e) {
    const { id } = e.target;
    const existId = itemsDelivery.find(elem => elem.id === id);
    if (!existId) {
      return addItemDeliveryList(id);
    }
  }

  return (
    <div className="menu-item">
      <span className="menu-item__name">{name}</span>
      <NumberFormat
        value={price}
        displayType={"text"}
        prefix={"$ "}
        thousandSeparator={"."}
        decimalSeparator={","}
        decimalScale={2}
        maxLength="12"
        className="menu-item__price"
      />
      <span className="menu-item__tooltip">{description}</span>
      <button className="menu-item__add" id={id} onClick={handleAddItem}>
        add
      </button>
    </div>
  );
}

export default MenuItem;
