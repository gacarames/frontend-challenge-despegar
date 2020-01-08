import React, { useState } from "react";
import "./Search.scss";
/* import { useHistory } from "react-router-dom"; */

function Search(props) {
  /* let history = useHistory(); */

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
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            value={filterForName}
            onChange={handleChangeValueName}
            className="form__input"
          />
        </div>
        <div className="form__group">
          <label htmlFor="descripcion">Description</label>
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
