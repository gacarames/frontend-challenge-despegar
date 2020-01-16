import React from "react";
import "./Modal.scss";

function Modal(props) {
  const { mergedArray } = props.jsonData;

  return (
    <div className="modal">
      <code>{JSON.stringify(mergedArray)}</code>
      {/* <code>{JSON.stringify(jsonData)}</code> */}
    </div>
  );
}

export default Modal;
