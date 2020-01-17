import React from "react";
import "./Modal.scss";

function Modal(props) {
  const { newOrder, show } = props;
  return (
    <div className={`modal ${show ? 'modal--show' : ''}`}>
      <h2 className="modal__heading">Datos de la orden:</h2>
      <div className="modal__content">
        <pre>
          {JSON.stringify(newOrder, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default Modal;
