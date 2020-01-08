import React from "react";

import "./MenuItem.scss";

function MenuItem(props) {
  const { foodName, description, price } = props.itemData;
  return (
    <div className="menu-item">
      <span className="menu-item__name">{foodName}</span>
      <span className="menu-item__price">{price}</span>
      <span className="menu-item__tooltip">{description}</span>
      <button className="menu-item__add">add</button>
    </div>
  );
}

export default MenuItem;
