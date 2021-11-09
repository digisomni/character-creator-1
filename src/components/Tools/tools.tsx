import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Slider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Scrollbars } from "react-custom-scrollbars";
import "./style.scss";

import { useGlobalState } from "../GlobalProvider";
import { threeService } from "../../actions/services";
import { XyzPositionSlider } from "./sliders";

function ChangeMorphValueSlider(props: any) {
  const { scene, randomize }: any = useGlobalState();
  const [currValue, setCurrValue] = React.useState();
  const updateMorphValue = (value: any) => {
    threeService.updateMorphValue(props.keyName, value, scene, props.targets).then(() => {
      setCurrValue(value);
    });
  };
  React.useEffect(() => {
    if (props.keyName && props.targets && scene) {
      threeService
        .getMorphValue(props.keyName, scene, props.targets[0])
        .then((res) => {
          console.log(res);
          setCurrValue(res);
        });
    }
  }, [props.targets && props.keyName && scene && randomize]);
  return (
    <>
      <Typography color="#FFFFFF">{props.keyName}</Typography>
      {currValue && (
        <Slider
          className="slider"
          size="small"
          value={currValue}
          min={0.1}
          max={1}
          step={0.05}
          onChange={(e: any) => {
            updateMorphValue(e.target.value);
          }}
        />
      )}
    </>
  );
}

export function TemplateEditorTools(props: any) {
  const { scene, nodes, templateInfo }: any = useGlobalState();
  const [shapeKeys, setShapeKeys] = React.useState<any>();
  const [shapeTargets, setShapeTargets] = React.useState<any>();
  const [shapeKeyDefaultValues, setShapeKeyDefaultValues] =
    React.useState<any>();

  const { category } = props;
  React.useEffect(() => {
    if (templateInfo?.editor?.shapes && category) {
      const shapes = templateInfo?.editor?.shapes.filter(
        (shape) => shape.mesh === category
      )[0];
      if (shapes?.keys) {
        setShapeKeys(shapes.keys);
        setShapeTargets(shapes.targets);
      }
    }
  }, [templateInfo?.editor?.shapes && category && scene]);

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
            {shapeKeys &&
              shapeKeys.length > 0 &&
              shapeKeys.map((key: any, index) => {
                console.log(key.name);
                return (
                  <ChangeMorphValueSlider
                    key={index}
                    keyName={key.name}
                    targets={shapeTargets}
                  />
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
