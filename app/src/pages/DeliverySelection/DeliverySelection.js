import React, { useState } from "react";
/* import { useParams } from "react-router-dom"; */
import useFetch from "../../hooks/useFetch";
import "./DeliverySelection.scss";
import { HOST } from "../../api";
import Loading from "../../components/Loading/Loading";
import { Section } from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import OptionsList from "../../components/OptionsList/OptionsList";
import "./DeliverySelection.scss";

function DeliverySelection() {

  const [queryFilterName, setQueryFilterName] = useState("");
  const [queryFilterDescription, setQueryFilterDescription] = useState("");

  /* const { id } = useParams(); */

  const { data, loading, error } = useFetch(`${HOST}/api/restaurants/`);

  function searchQueryCallbackName(valueFromChild) {
    setQueryFilterName(valueFromChild);
  }

  function searchQueryCallbackDescription(valueFromChild) {
    setQueryFilterDescription(valueFromChild);
  }

  let filterList = []

  function filterOptionsList() {
    if (data && (queryFilterName || queryFilterDescription)) {
      filterList = data.filter((item) => {
        return (
          item.name.toLowerCase().includes(queryFilterName.toLowerCase()) && item.about.toLowerCase().includes(queryFilterDescription.toLowerCase())
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
        <Search
          callbackParentToGetName={searchQueryCallbackName}
          callbackParentToGetDescription={searchQueryCallbackDescription}
        />
      </Section>
      <Section section="options" styled="" layout="four-cols">
        <OptionsList
          itemsList={filterList}
        />
      </Section>
    </>
  );
}

export default DeliverySelection;
