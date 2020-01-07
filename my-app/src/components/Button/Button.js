import React from 'react';
import { useHistory } from "react-router-dom";
import './Button.scss';

function Button(props) {

  let history = useHistory();

  const { title, id } = props.itemData

  const style = props.styleButton

  const action = props.typeAction === 'compra' ? 'Comprar' : null

  function handleSubmit(event) {
    history.push(`/items/checkout`)
    event.preventDefault();
  }

  return (
    <form className="button" onSubmit={handleSubmit}>
      <input
        type="submit"
        id={id}
        className={`button__action button__action--${style}`}
        value={action}
        title={`${action} ${title}`}
      />
    </form>
  )
}

export default Button;
