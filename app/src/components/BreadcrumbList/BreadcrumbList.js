import React from "react";
import { Link } from "react-router-dom";
import GoBack from "../GoBack/GoBack";
import "./BreadcrumbList.scss";

function BreadcrumbList(props) {
  let { stages } = props;

  return (
    <div className="breadcrumb">
      <GoBack />
      {stages &&
        stages.map(item => {
          return (
            <Link to={item.path} key={item.id} className="breadcrumb__link">
              {item.name}
            </Link>
          );
        })}
    </div>
  );
}

export default BreadcrumbList;
