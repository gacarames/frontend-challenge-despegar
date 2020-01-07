import React from 'react';
import { Link } from "react-router-dom";
/* import Thumbnail from "../Thumbnail/Thumbnail"; */
/* import Price from "../Price/Price"; */
/* import Shipping from "../Shipping/Shipping"; */
import './ResultItem.scss';

function ResultItem(props) {
  const { id, name } = props.itemData
  return (
    <article className="item">
      <Link
        className="item__link"
        to={{
          pathname: `items/${id}`,
          state: { fromDashboard: true }
        }}
      >
        <div className="item__wrapper">
          {/* <Thumbnail src={picture} /> */}
          <div className="item__description-container">
            <h2 className="item__title">{name}</h2>
            {/* <Price price={price} /> */}
            {/* free_shipping && <Shipping /> */}
          </div>

        </div>
      </Link>
    </article>
  )
}

export default ResultItem;
