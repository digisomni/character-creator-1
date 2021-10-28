import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Slider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Scrollbars } from "react-custom-scrollbars";
import { Button } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/system";
import "./style.scss";

import { useGlobalState } from "../GlobalProvider";
import { threeService } from "../../actions/services";
import { XyzPositionSlider } from "./sliders";

export function EditorTools(props: any) {
  const { scene, nodes, templateInfo }: any = useGlobalState();
  const [shapekeys, setShapeKeys] = React.useState<any>();
  const [shapeTargets, setShapeTargets] = React.useState<any>();
  React.useEffect(() => {
    setShapeKeys(templateInfo?.editor?.shapes?.body?.keys);
    setShapeTargets(templateInfo?.editor?.shapes?.body?.targets);
    console.log(scene);
  }, [templateInfo?.editor?.shapes?.body?.keys]);
  const updateShape = (key: any, value: any, targets: any) => {
    threeService.updateMeshShape(key,value,scene,targets);
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
            {shapekeys &&
              shapekeys.length > 0 &&
              shapekeys.map((key: any) => {
                console.log(key);
                return (
                  <React.Fragment>
                    {key.name}
                    <Slider
                      className="slider"
                      size="small"
                      min={0}
                      max={1}
                      step={0.05}
                      onChange={(e: any) => {
                        updateShape(key,e.target.value,shapeTargets);
                      }}
                    />
                  </React.Fragment>
                );
              })}
          </Typography>
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
              {nodes &&
                Object.keys(nodes).map((keyName, i) => {
                  if (nodes[keyName].type === "Bone") {
                    return (
                      <XyzPositionSlider
                        position={nodes[keyName]?.position}
                        name={nodes[keyName]?.name}
                        key={i}
                      />
                    );
                  }
                })}
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
          <Typography>Skin Editor</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Scrollbars className="scroll">
            <Typography></Typography>
          </Scrollbars>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
