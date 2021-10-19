import React from "react";
import Box from "@mui/material/Box";
import SettingsIcon from '@mui/icons-material/Settings';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";

import "./style.scss";

import { useGlobalState } from "../GlobalProvider";
import { apiService } from "../../actions/services";

export default function MeshSelector() {
  const {
    categories,
    category,
    setCategory,
  }: any = useGlobalState();

  console.log(categories);

  const changeCategory = (category: any) => {
    setCategory({
      name: category.name,
      sideIndicator: category.sideIndicator,
    });
  };

  return (
      <List className="categories-wrap">
        {categories &&
          categories.map((cat: any, index: any) => {
            return (
              <ListItem
                key={index}
                onClick={() => changeCategory(cat)}
                className={
                  category && category.name === cat.name
                    ? "mesh-nav-item active"
                    : "mesh-nav-item"
                }
              >
                <Avatar
                  alt={`${cat.name}`}
                  className="icon"
                  src={`/img/graphics_creation/${cat.imgfile}`}
                />
              </ListItem>
            );
          })}
          <ListItem
                key={'settings'}
                onClick={() => changeCategory('settings')}
                className={
                  category && category.name === 'settings'
                    ? "mesh-nav-item active"
                    : "mesh-nav-item"
                }
              >
                <Avatar className="icons">
                  <SettingsIcon />
                </Avatar>
              </ListItem>
      </List>
  );
}
