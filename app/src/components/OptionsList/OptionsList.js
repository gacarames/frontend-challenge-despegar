import React from "react";
import "./OptionsList.scss";
import ResultItem from "../ResultItem/ResultItem";

function OptionsList(props) {
  const { itemsList } = props

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
