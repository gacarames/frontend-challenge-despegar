import React, { useContext } from 'react';
import DeliveryListContext from '../../context/appContext'
import DeliveryItem from '../DeliveryItem/DeliveryItem';
import './DeliveryList.scss';

import NumberFormat from "react-number-format";

function DeliveryList(props) {

  const { delivery } = props

  const { itemsDelivery } = useContext(DeliveryListContext)

  let filteredArray = delivery.filter(function (array_el) {
    return itemsDelivery.filter(function (anotherOne_el) {
      return anotherOne_el === array_el.id;
    }).length === 1
  });

  let totalOrderCost = filteredArray.reduce((total, item) => total + item.price, 0)

  console.log(itemsDelivery)

  return (
    <>
      <table className="delivery-list">
        <thead>
          <tr>
            <th colSpan="2">Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {filteredArray && filteredArray.map(item => {
            return (
              <DeliveryItem itemData={item} key={item.id} />
            )
          })}
          <tr className="delivery-list__total">
            <td className="delivery-list__total-price" colSpan="4">TOTAL</td>
            <td className="delivery-list__total-price">
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
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default DeliveryList;
