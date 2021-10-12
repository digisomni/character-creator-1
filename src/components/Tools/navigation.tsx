import React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import { Scrollbars } from "react-custom-scrollbars";

// Importing icons from MUI
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import "./style.scss";

import { useGlobalState } from "../GlobalProvider";
import { apiService } from "../../actions/services";

export default function ToolsNavigation() {
  const { categories, category, setCategory }: any = useGlobalState();

  console.log(categories);

  const changeCategory = (category: any) => {
    setCategory({
      name: category.name,
      sideIndicator: category.sideIndicator,
    });
  };

  return (
    <List className="tools-navigation-wrap">
      <ListItem key={"settings1"}>
        <Tooltip title="Body" arrow placement="right">
          <Avatar className="avatar active">
            <SettingsAccessibilityIcon />
          </Avatar>
        </Tooltip>
      </ListItem>
      <ListItem key={"settings2"}>
        <Tooltip title="Lights" arrow placement="right">
          <Avatar className="avatar">
            <LightbulbIcon />
          </Avatar>
        </Tooltip>
      </ListItem>
      <ListItem key={"settings3"}>
        <Tooltip title="Settings" arrow placement="right">
          <Avatar className="avatar">
            <SettingsIcon />
          </Avatar>
        </Tooltip>
      </ListItem>
    </List>
  );
}
