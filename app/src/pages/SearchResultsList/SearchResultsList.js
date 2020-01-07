import React from "react";
import useFetch from "../../hooks/useFetch";
import "./SearchResultsList.scss";
import { HOST } from "../../api";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import BreadcrumbList from "../../components/BreadcrumbList/BreadcrumbList";
import Loading from "../../components/Loading/Loading";
import ResultItem from "../../components/ResultItem/ResultItem";

function SearchResultsList(props) {
  const queryString = new URLSearchParams(window.location.search);

  const search = queryString.get("search");

  const { data, loading, error } = useFetch(`${HOST}/api/items?q=${search}`);

  const { items, categories } = data;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <SectionWrapper>
        <BreadcrumbList categories={categories} />
      </SectionWrapper>
      <SectionWrapper section="results">
        <div className="results-list card">
          {items &&
            items.map(item => {
              return <ResultItem itemData={item} key={item.id} />;
            })}
        </div>
      </SectionWrapper>
    </>
  );
}

export default SearchResultsList;
