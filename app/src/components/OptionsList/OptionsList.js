import React from "react";
import "./OptionsList.scss";
import Loading from "../Loading/Loading";
import ResultItem from "../ResultItem/ResultItem";

import useFetch from "../../hooks/useFetch";
import { HOST } from "../../api";

function OptionsList(props) {

  /* const queryString = new URLSearchParams(window.location.search); */

  /* const search = queryString.get("search"); */

  const { data, loading, error } = useFetch(`${HOST}/api/restaurants/`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      {data &&
        data.map(item => {
          return <ResultItem itemData={item} key={item.id} />;
        })
      }
    </>
  );
}

export default OptionsList;
