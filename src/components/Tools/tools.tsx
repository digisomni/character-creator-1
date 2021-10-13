import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Slider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Scrollbars } from "react-custom-scrollbars";
import "./style.scss";

import { useGlobalState } from "../GlobalProvider";
import { threeService } from "../../actions/services";
import { XyzPositionSlider } from './sliders';

export function MorphUpdateTools() {
    const {
        scene,
        modelNodes
      }: any = useGlobalState();
    const [morph, setMorph] = React.useState<number>(0);
    const [morph2, setMorph2] = React.useState<number>(0);
    const [morph3, setMorph3] = React.useState<number>(0);
    const updateMorph = (value, key) => {
      setMorph(value);
      threeService.changeMorphInfluence("Shirt2", value, scene, true, key);
      threeService.changeMorphInfluence("Pants2", value, scene, true, key);
      threeService.changeMorphInfluence("CC_Base_Eye009_1", value, scene, true, key);
      threeService.changeMorphInfluence("CC_Base_Eye009_2", value, scene, true, key);
      threeService.changeMorphInfluence("CC_Base_Eye009_3", value, scene, true, key);
      threeService.changeMorphInfluence("CC_Base_Eye009_4", value, scene, true, key);
      threeService.changeMorphInfluence("CC_Base_Eye009_5", value, scene, true, key);
    };
  return (
    <>
<Accordion className="options-box">
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Shape Editor</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
          Chubby
      <Slider
            className="slider"
            size="small"
            min={0}
            max={1}
            step={0.05}
            onChange={(e: any) => {
              updateMorph(e.target.value, "Chubby");
            }}
          />
          Buff
      <Slider
            className="slider"
            size="small"
            min={0}
            max={1}
            step={0.01}
            onChange={(e: any) => {
              updateMorph(e.target.value, "Buff");
            }}
          />
          Lanky
      <Slider
            className="slider"
            size="small"
            min={0}
            max={1}
            step={0.01}
            onChange={(e: any) => {
              updateMorph(e.target.value, "Lanky");
            }}
          />
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion className="options-box">
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Skin Editor</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Scrollbars className="scroll">
      <Typography>
      </Typography>
      </Scrollbars>
    </AccordionDetails>
  </Accordion>
  <Accordion className="options-box">
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Position Editor</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Scrollbars className="scroll">
      <Typography>
          {modelNodes &&
            Object.keys(modelNodes).map((keyName, i) => {
              if (modelNodes[keyName].type === "Bone") {
                return (
                  <XyzPositionSlider
                    position={modelNodes[keyName]?.position}
                    name={modelNodes[keyName]?.name}
                    key={i}
                  />
                );
              }
            })}
      </Typography>
      </Scrollbars>
    </AccordionDetails>
  </Accordion>
    </>
  
  );
}
