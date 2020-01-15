import React from "react";
import "./Modal.scss";

function Modal(props) {
  const { jsonData } = props;

  return (
    <div className="modal">
      <code>{JSON.stringify(jsonData)}</code>
      <code>{JSON.stringify(jsonData)}</code>
    </div>
  );
}

export default Modal;
