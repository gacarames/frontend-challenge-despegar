import React from "react";

import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "./MenuList.scss";
/* import "react-web-tabs/dist/react-web-tabs.css"; */
import MenuItem from "../MenuItem/MenuItem";

function MenuList(props) {
  const { menu } = props;

  let categorys = menu.map(opt => opt.category_food)

  let tabsList = [...new Set(categorys)].sort()

  console.log(tabsList)
  
  return (
    <Tabs
      defaultTab="pizza"
      onChange={tabId => {
        console.log(tabId);
      }}
      vertical
    >
      <TabList>
        {tabsList &&
          tabsList.map((type, index) => {
            return (
              <Tab
                key={index}
                tabFor={type}
                className="tabs__item-list"
              >
                {type}
              </Tab>
            );
          })}
      </TabList>

      {/* menu &&
        menu.map(type => {
          return (
            <TabPanel
              key={type.id}
              tabId={type.type_food}
              className="tabs__panel"
            >
              {type.food_list.map((item, index) => {
                return <MenuItem key={index} itemData={item} />;
              })}
            </TabPanel>
          );
        }) */}
    </Tabs>
  );
}

export default MenuList;
