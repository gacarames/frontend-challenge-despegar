import React, { useState } from "react";
import "./Search.scss";
import InputForm from "../InputForm/InputForm"

function Search(props) {

  const filtersInitialState = {
    name: '',
    description: ''
  }

  const [filters, setFilters] = useState(filtersInitialState)

  function handleOnChange({ target: { name, value } }) {
    setFilters({
      ...filters,
      [name]: value
    });
    props.getfilterValues(filters)
  }

  const { name, description } = filters

  return (
    <div className="search">
      <form className="form">
        <InputForm
          label="Nombre"
          type="text"
          name="name"
          value={name}
          onChange={handleOnChange}
        />
        <InputForm
          label="Descripción"
          type="text"
          name="description"
          value={description}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}

export default Search;
