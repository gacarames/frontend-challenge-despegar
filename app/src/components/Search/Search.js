import React, { useState } from "react";
import "./Search.scss";
import { useHistory } from "react-router-dom";

function Search(props) {

  const [submitSearch, setSubmitSearch] = useState('');
  let history = useHistory();

  function handleChangeValue(event) {
    let { value } = event.target
    setSubmitSearch(value)
  }

  function handleSubmit(event) {
    let idRegex = /([A-Z]{3})+(\d+$)/g
    if (submitSearch.match(idRegex)) {
      history.push(`/items/${submitSearch}`)
    } else {
      history.push(`/items?search=${submitSearch}`)
    }
    event.preventDefault();
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={submitSearch}
          onChange={handleChangeValue}
          placeholder="Estoy buscando..."
          className="form__input"
        />
        <input
          type="submit"
          value=""
          className="form__submit"
        />
      </form>
    </div>
  )
};

export default Search;
