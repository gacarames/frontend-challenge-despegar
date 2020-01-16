import React, { useState } from "react";
import "./Search.scss";

function Search(props) {

  const [filterForName, setFilterForName] = useState("");
  const [filterForDescription, setFilterForDescription] = useState("");

  function handleChangeValueName(event) {
    let { value } = event.target;
    setFilterForName(value);
    props.callbackParentToGetName(value)
  }

  function handleChangeValueDescription(event) {
    let { value } = event.target;
    setFilterForDescription(value);
    props.callbackParentToGetDescription(value)
  }

  return (
    <div className="search">
      <form className="form">
        <div className="form__group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            value={filterForName}
            onChange={handleChangeValueName}
            className="form__input"
          />
        </div>
        <div className="form__group">
          <label htmlFor="descripcion">Descripción:</label>
          <input
            type="text"
            value={filterForDescription}
            onChange={handleChangeValueDescription}
            className="form__input"
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
