import React from "react";

import "./MenuItem.scss";

function handleAddItem(e) {
  const { id } = e.target
  console.log(id)
}

function MenuItem(props) {
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
