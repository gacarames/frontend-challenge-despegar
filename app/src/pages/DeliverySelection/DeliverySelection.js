import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./DeliverySelection.scss";
import { HOST } from "../../api";
import Loading from "../../components/Loading/Loading";
import { Section } from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import OptionsList from "../../components/OptionsList/OptionsList";
import "./DeliverySelection.scss";

function DeliverySelection() {

  const [filterQuery, setFiltersQuery] = useState({})

  function filterQueryCallback(filterValueaFromChild) {
    setFiltersQuery(filterValueaFromChild);
  }

  const { data, loading, error } = useFetch(`${HOST}/api/restaurants/`);

  let filterList = []

  function filterOptionsList() {
    if (data && (filterQuery.name || filterQuery.description)) {
      filterList = data.filter((item) => {
        return (
          item.name.toLowerCase().includes(filterQuery.name.toLowerCase()) && item.about.toLowerCase().includes(filterQuery.description.toLowerCase())
        )
      })
    } else {
      filterList = data
    }
  }

  filterOptionsList()

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <Section section="search">
        <Search getfilterValues={filterQueryCallback} />
      </Section>
      <Section section="options" styled="" layout="four-cols">
        <OptionsList itemsList={filterList} />
      </Section>
    </>
  );
}

export default DeliverySelection;
