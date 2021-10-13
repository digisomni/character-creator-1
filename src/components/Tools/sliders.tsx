import * as React from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import "./style.scss";

import { useGlobalState } from "../GlobalProvider";
import { threeService } from "../../actions/services";
import { Box } from "@mui/system";

export function XyzPositionSlider(props: any) {
  const { position, name } = props;
  const { scene }: any = useGlobalState();
  const [valueX, setValueX] = React.useState<number>(position && position.x);
  const [valueY, setValueY] = React.useState<number>(position && position.y);
  const [valueZ, setValueZ] = React.useState<number>(position && position.z);
  const handleChange = (value: any, axis: any) => {
    switch (axis) {
      case "x":
        setValueX(value);
        break;
      case "y":
        setValueY(value);
        break;
      case "z":
        setValueZ(value);
        break;
      default:
    }
    threeService.changeBonePosition(name, value, axis, scene);
  };
  return (
    <Box className="xyz-slider-wrap">
      <Typography variant="h6" className="title">
        {name}
      </Typography>
      <Box>
        <Slider
          size="small"
          className="slider"
          value={valueX}
          min={-10}
          max={10}
          step={0.001}
          onChange={(e: any) => {
            handleChange(e.target.value, "x");
          }}
        />
        <input
          value={valueX}
          className="input"
          type="number"
          min={-10}
          max={10}
          step={0.001}
          onChange={(e: any) => {
            handleChange(e.target.value, "x");
          }}
        />
      </Box>
      <Box>
        <Slider
          size="small"
          className="slider"
          value={valueY}
          min={-10}
          max={10}
          step={0.001}
          onChange={(e: any) => {
            handleChange(e.target.value, "y");
          }}
        />
        <input
          value={valueY}
          className="input"
          type="number"
          min={-10}
          max={10}
          step={0.001}
          onChange={(e: any) => {
            handleChange(e.target.value, "y");
          }}
        />
      </Box>
      <Box>
        <Slider
          size="small"
          className="slider"
          value={valueZ}
          min={-10}
          max={10}
          step={0.001}
          onChange={(e: any) => {
            handleChange(e.target.value, "z");
          }}
        />
        <input
          value={valueZ}
          className="input"
          type="number"
          min={-10}
          max={10}
          step={0.001}
          onChange={(e: any) => {
            handleChange(e.target.value, "z");
          }}
        />
      </Box>
    </Box>
  );
}


export function SingleSlider(props: any) {
  const { position, name } = props;
  const { scene }: any = useGlobalState();
  const [value, setValue] = React.useState<number>(position && position.x);
  const handleChange = (value: any, axis: any) => {
    setValue(value);
    threeService.changeBonePosition(name, value, axis, scene);
  };
  return (
    <Box className="single-slider-wrap">
      <Typography variant="h6" className="title">
        {name}
      </Typography>
      <Box>
        <Slider
          size="small"
          className="slider"
          value={value}
          min={-10}
          max={10}
          step={0.001}
          onChange={(e: any) => {
            handleChange(e.target.value, "x");
          }}
        />
        <input
          value={value}
          className="input"
          type="number"
          min={-10}
          max={10}
          step={0.001}
          onChange={(e: any) => {
            handleChange(e.target.value, "x");
          }}
        />
      </Box>
    </Box>
  );
}
