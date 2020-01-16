import React from 'react';
import { Link } from "react-router-dom";
import './ResultItem.scss';

function ResultItem(props) {
  const { id, name, about } = props.itemData
  return (
    <article className="item">
      <Link
        className="item__link"
        to={{
          pathname: `/order-creation/${id}`,
          state: { fromDashboard: true }
        }}
      >
        <div className="item__wrapper">
          <div className="item__description-container">
            <h2 className="item__title">{name}</h2>
            <p className="item__about">{about}</p>
          </div>

        </div>
      </Link>
    </article>
  )
}

export default ResultItem;
