import React from "react";

import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "./MenuList.scss";
import MenuItem from "../MenuItem/MenuItem";

function MenuList(props) {

  const { menu } = props;

  let categorys = menu.map(opt => opt.category_food)

  let tabsList = [...new Set(categorys)].sort()

  return (
    <Tabs
      className="tabs"
      defaultTab={tabsList[0]}
      onChange={tabId => {
        console.log(tabId);
      }}
      vertical
    >
      <TabList
        className="tabs__list"
      >
        {tabsList &&
          tabsList.map((type) => {
            return (
              <Tab
                key={type}
                tabFor={type}
                className="tabs__item-list"
              >
                {type}
              </Tab>
            );
          })}
      </TabList>
      {
        tabsList && tabsList.map(tabPanel => {
          return (
            <TabPanel tabId={tabPanel} key={tabPanel}>
              <div className="tabs__panel">
                {
                  menu
                    .filter(opt => {
                      return (opt.category_food === tabPanel)
                    })
                    .map(item => {
                      return (
                        <MenuItem key={item.id} itemData={item} />
                      )
                    })
                }
              </div>

            </TabPanel>
          )
        })
      }
    </Tabs>
  );
}

export default MenuList;