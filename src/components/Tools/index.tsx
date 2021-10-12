import * as React from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./style.scss";

import { useGlobalState } from "../GlobalProvider";
import { XyzPositionSlider } from "./sliders";
import ToolsNavigation from "./navigation";
import { Box } from "@mui/system";
import { Slider } from "@mui/material";
import { threeService } from "../../actions/services";
import { MorphUpdateTools } from "./tools";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Tools(props: any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { modelNodes, scene, characterName, setCharacterName }: any =
    useGlobalState();
  const [morph, setMorph] = React.useState<number>(0);
  const updateMorph = (value) => {
    setMorph(value);
    threeService.changeMorphInfluence("Shirt2", value, scene, true, false);
    threeService.changeMorphInfluence("Pants2", value, scene, true, false);
    threeService.changeMorphInfluence(
      "CC_Base_Eye009_1",
      value,
      scene,
      true,
      false
    );
    threeService.changeMorphInfluence(
      "CC_Base_Eye009_2",
      value,
      scene,
      true,
      false
    );
    threeService.changeMorphInfluence(
      "CC_Base_Eye009_3",
      value,
      scene,
      true,
      false
    );
    threeService.changeMorphInfluence(
      "CC_Base_Eye009_4",
      value,
      scene,
      true,
      false
    );
    threeService.changeMorphInfluence(
      "CC_Base_Eye009_5",
      value,
      scene,
      true,
      false
    );
  };
  return (
    <Box className="tools-wrap">
      <ToolsNavigation />
      <Box className="tools">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs"
              className="tabs"
            >
              <Tab label="Full Body" {...a11yProps(0)} className="options-tab" />
              <Tab label="Head" {...a11yProps(1)} className="options-tab" />
              <Tab label="Torso" {...a11yProps(2)} className="options-tab" />
              <Tab label="Arms" {...a11yProps(3)} className="options-tab" />
              <Tab label="Legs" {...a11yProps(4)} className="options-tab" />
            </Tabs>
          </Box>
        
            <TabPanel value={value} index={0}>
              <MorphUpdateTools />
            </TabPanel>
            <TabPanel value={value} index={1}></TabPanel>
            <TabPanel value={value} index={2}>
              3
            </TabPanel>
            <TabPanel value={value} index={3}>
              4
            </TabPanel>
            <TabPanel value={value} index={4}>
              5
            </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}
