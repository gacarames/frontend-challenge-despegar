import React from 'react';
import DeliveryItem from '../DeliveryItem/DeliveryItem';
import './DeliveryList.scss';

function DeliveryList(props) {
  const { delivery } = props

  return (
    <div className="delivery-list">
      {delivery && delivery.map(item => {
        return (
          <DeliveryItem itemData={item} />
        )
      })}

      <div className="delivery-list__total">

      </div>
    </div>
  );
}

export default DeliveryList;
