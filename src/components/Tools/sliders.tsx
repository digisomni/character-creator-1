import * as React from "react";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import "./style.scss";

import { useGlobalState } from "../GlobalProvider";
import { threeService } from "../../actions/services";

export function CameraVerticalPositionSlider(props: any) {
  const { value, axis, name } = props;
  const { cvpSlider, setCvpSlider }: any = useGlobalState();
  return (
    <Slider
      sx={{
        '& input[type="range"]': {
          WebkitAppearance: "slider-vertical",
        },
      }}
      orientation="vertical"
      defaultValue={cvpSlider}
      min={-1}
      max={2}
      step={0.1}
      onChange={(e: any) => {
        setCvpSlider(e.target.value);
      }}
      aria-label="Camera Vertical Position Slider"
      className="cvp-slider"
    />
  );
}

export function ChangeRotationSlider(props: any) {
  const { value, axis, name } = props;
  const { scene }: any = useGlobalState();
  return (
    <Slider
      size="small"
      defaultValue={value}
      min={-10}
      max={10}
      step={0.001}
      valueLabelDisplay="auto"
      onChange={(e: any) => {
        threeService.changeBoneRotation(name, e.target.value, axis, scene);
      }}
    />
  );
}
