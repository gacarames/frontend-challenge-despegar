import React from "react";
import { useLocation } from "react-router-dom";
import "./BreadcrumbList.scss";

function BreadcrumbList() {

  const { pathname } = useLocation()

  const stagesList = [
    {
      id: "1",
      name: "Delivery Selection",
      path: "/"
    },
    {
      id: "2",
      name: "Order Creation",
      path: "order-creation"
    },
    {
      id: "3",
      name: "Data and delivery",
      path: "order-delivery"
    }
  ]
  let currentPathname = pathname.split("/", 2)[1]
  return (
    <div className="breadcrumb">
      {stagesList &&
        stagesList.map(item => {
          let active = item.path === currentPathname;
          return (
            <span
              key={item.id}
              className={`breadcrumb__item ${active ? 'breadcrumb--current' : ''}`}>
              {item.name}
            </span>
          );
        })}
    </div>
  );
}

export default BreadcrumbList;
