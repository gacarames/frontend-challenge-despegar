import React, { useState } from 'react';
import './DeliveryItem.scss';

function DeliveryItem(props) {

  const { name, price, id } = props.itemData

  const [valueInput, setValueInput] = useState(1);

  const [total, setTotal] = useState(price);


  function handleRemoveItem(e) {
    const { id } = e.target
    console.log(id)
  }

  function handleNumberItems(e) {
    const { value } = e.target
    let totalPrice = (value > 0) ? price * value : price

    setValueInput((value > 0) ? value : 1)
    setTotal(totalPrice.toFixed(2))
  }

  return (
    <div className="delivery-item">
      <button className="delivery-item__remove" id={id} onClick={handleRemoveItem}>&times;</button>
      <span className="delivery-item__name">{name}</span>
      <input id={id} type="number" value={valueInput} onChange={handleNumberItems} />
      <span className="delivery-item__price">${price}</span>
      <span className="delivery-item__total"> | ${total}</span>
    </div>
  )
}

export default DeliveryItem;
