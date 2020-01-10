import React from "react";
import AppContext from "../../context/appContext";
import "./OptionsList.scss";
import ResultItem from "../ResultItem/ResultItem";

function OptionsList(props) {

  const testString = React.useContext(AppContext);

  /* const queryString = new URLSearchParams(window.location.search); */

  /* const search = queryString.get("search"); */

  const { itemsList } = props

  console.log(testString)

  return (
    <>
      {itemsList &&
        itemsList.map(item => {
          return <ResultItem itemData={item} key={item.id} />;
        })
      }
    </>
  );
}

export default OptionsList;
