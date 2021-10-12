import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";

import "./style.scss";

import { useGlobalState } from "../AuthContextWrap";
import { apiService } from "../../actions/services";
import Selector from "./selector";

export default function MeshSelector() {
  const {
    categories,
    category,
    setCategory,
    setCollection,
    isLeft,
    setSearch
  }: any = useGlobalState();

  const changeCategory = (category: any) => {
    setCategory({
      name: category.name,
      sideIndicator: category.sideIndicator,
    });
    apiService.fetchElements(category.name, isLeft).then((res: any) => {
      setCollection(res);
      setSearch("");
    });
  };

  return (
    <div className="mesh-selector-wrap">
      <nav aria-label="main category selector">
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
        </List>
      </nav>
      <Selector />
    </div>
  );
}
