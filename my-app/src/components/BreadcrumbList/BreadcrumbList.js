import React from "react";
import { Link } from "react-router-dom";
import GoBack from "../GoBack/GoBack";
import "./BreadcrumbList.scss";

function BreadcrumbList(props) {
  let { categories } = props;

  return (
    <div className="breadcrumb">
      <GoBack />
      {categories &&
        categories.map(item => {
          return (
            <Link to="/" key={item.id} className="breadcrumb__link">
              {item.name}
            </Link>
          );
        })}
    </div>
  );
}

export default BreadcrumbList;
