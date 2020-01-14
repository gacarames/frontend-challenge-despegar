import React, { useContext } from "react";
import DeliveryListContext from '../../context/appContext'
import "./MenuItem.scss";


function MenuItem(props) {
  const { itemsDelivery, addItemDeliveryList } = useContext(DeliveryListContext)

  function handleAddItem(e) {
    const { id } = e.target
    if (!itemsDelivery.includes(id)) {
      return addItemDeliveryList(id)
    }
  }

  const { name, description, price, id } = props.itemData;
  return (
    <div className="menu-item">
      <span className="menu-item__name">{name}</span>
      <span className="menu-item__price">${price}</span>
      <span className="menu-item__tooltip">{description}</span>
      <button className="menu-item__add" id={id} onClick={handleAddItem}>add</button>
    </div>
  );
}

export default MenuItem;
