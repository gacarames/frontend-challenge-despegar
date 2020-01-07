import React from "react";
import { createHashHistory } from "history";
import "./GoBack.scss";

function GoBack() {
  const history = createHashHistory();
  return (
    <>
      <button className="go-back" onClick={history.goBack}>Volver atras</button>
    </>
  );
}

export default GoBack;
