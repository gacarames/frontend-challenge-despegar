import React, { useState } from "react";
/* import { useParams } from "react-router-dom"; */
/* import useFetch from "../../hooks/useFetch"; */
import "./DeliverySelection.scss";
/* import { HOST } from "../../api";
import Loading from "../../components/Loading/Loading"; */
import { Section } from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import OptionsList from "../../components/OptionsList/OptionsList";
import "./DeliverySelection.scss";

function DeliverySelection() {
  const [boxSearchQuery, setBoxSearchQuery] = useState("");

  /* const { id } = useParams(); */

  /* const { data, loading, error } = useFetch(`${HOST}/api/restaurants/`); */

  /* const { item } = data; */

  function searchQueryCallback(valueFromChild) {
    setBoxSearchQuery(valueFromChild);
  }

  /* if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  } */

  console.log(boxSearchQuery)

  return (
    <>
      <Section>
        <Search callbackFromParent={searchQueryCallback} />
      </Section>
      <Section section="detail" styled="card" layout="four-cols">
        <OptionsList />
      </Section>
    </>
  );
}

export default DeliverySelection;
