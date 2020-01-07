import React, { useState } from "react";
import { useParams } from "react-router-dom";
/* import useFetch from "../../hooks/useFetch"; */
import "./DeliverySelection.scss";
/* import { HOST } from "../../api";
import Loading from "../../components/Loading/Loading"; */
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import Search from "../../components/Search/Search";
import OptionsList from "../../components/OptionsList/OptionsList";
import "./DeliverySelection.scss";

function DeliverySelection() {
  const [boxSearchQuery, setBoxSearchQuery] = useState("");

  const { id } = useParams();

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

  return (
    <>
      <SectionWrapper>
        <Search callbackFromParent={searchQueryCallback} />
      </SectionWrapper>
      <SectionWrapper section="detail" styled="card" layout="four-cols">
        <OptionsList />
      </SectionWrapper>
    </>
  );
}

export default DeliverySelection;
