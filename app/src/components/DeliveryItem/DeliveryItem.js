import React, { useState, useContext } from 'react';
import DeliveryListContext from '../../context/appContext'
import NumberFormat from "react-number-format";
import './DeliveryItem.scss';

function DeliveryItem(props) {

  const { removeItemDeliveryList } = useContext(DeliveryListContext)

  const { name, price, id } = props.itemData

  const [valueInput, setValueInput] = useState(1);

  const [total, setTotal] = useState(price);

  function handleRemoveItem(e) {
    const { id } = e.target
    return removeItemDeliveryList(id)
  }

  function handleNumberItems(e) {
    const { value } = e.target
    let totalPrice = (value > 0) ? price * value : price
    setValueInput(value)
    setTotal(totalPrice)
  }

  return (
    <tr className="delivery-item">
      <td>
        <button className="delivery-item__remove" id={id} onClick={handleRemoveItem}>&times;</button>
      </td>
      <td>
        <span className="delivery-item__name">{name}</span>
      </td>
      <td>
        <input id={id} type="number" value={valueInput} onChange={handleNumberItems} />
      </td>
      <td>
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
      </td>
      <td>
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
      </td>
    </tr>
  )
}

export default DeliveryItem;
