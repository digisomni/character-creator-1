import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Slider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Scrollbars } from "react-custom-scrollbars";
import { Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/system";
import "./style.scss";

import { useGlobalState } from "../GlobalProvider";
import { threeService } from "../../actions/services";
import { XyzPositionSlider } from './sliders';
import { EditorTools } from './tools';

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

export function TemplateBodyTools() {

  const {
    modelNodes,
    scene,
    characterName,
    setCharacterName,
    randomize,
    setRandomize,
  }: any = useGlobalState();

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="tools">
        <Box>
          <Button onClick={() => !randomize && setRandomize(true)} className="">
            Random
          </Button>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs"
              className="tabs"
            >
              <Tab
                label="Full Body"
                {...a11yProps(0)}
                className="options-tab"
              />
              <Tab label="Head" {...a11yProps(1)} className="options-tab" />
              <Tab label="Torso" {...a11yProps(2)} className="options-tab" />
              <Tab label="Arms" {...a11yProps(3)} className="options-tab" />
              <Tab label="Legs" {...a11yProps(4)} className="options-tab" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <EditorTools category="body" />
          </TabPanel>
          <TabPanel value={value} index={1}>
          <EditorTools category="head" />
          </TabPanel>
          <TabPanel value={value} index={2}>
          <EditorTools category="torso" />
          </TabPanel>
          <TabPanel value={value} index={3}>
          <EditorTools category="arms" />
          </TabPanel>
          <TabPanel value={value} index={4}>
          <EditorTools category="legs" />
          </TabPanel>
        </Box>
      </div>
  );
}
