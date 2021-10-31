/* eslint-disable */
import React, { useRef, Suspense, useState } from "react";
import "./style.scss";
import * as THREE from "three";
import Slider from "@mui/material/Slider";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  Text,
} from "@react-three/drei";

import { useGlobalState } from "../GlobalProvider";
import { TemplateModel } from "./models";
import { Box } from "@mui/system";
import { threeService } from "../../actions/services";

export default function Scene(props: any) {
  const { editor, wrapClass }: any = props;
  const { characterName, modelNodes, scene , randomize }: any = useGlobalState();
  const [cvpSlider, setCvpSlider] = React.useState<number>(1);
  return (
    <div className={`scene-wrap ${wrapClass && wrapClass}`}>
      <div className="scene-tools">
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
          className="slider"
        />
      </div>
      <Canvas>
        { /*
        <Text
          color="#efefef"
          anchorX="center"
          anchorY="middle"
          position={[0, 2, 0]}
        >
          {characterName}
        </Text>
        */ }
        <color attach="background" args={["#0f1321"]} />
        <gridHelper
          args={[200, 100, "#002459", "#002459"]}
          position={[0, 0, 0]}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 50, -100]} intensity={6} />
        <pointLight position={[-50, 0, -50]} intensity={1} />
        <spotLight
          castShadow
          intensity={8}
          angle={Math.PI / 10}
          position={[10, 10, 10]}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <OrbitControls
          minDistance={1}
          maxDistance={5}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2 - 0.1}
          enablePan={false}
          target={[0, 1, 0]}
        />
        <PerspectiveCamera>
          <TemplateModel nodes={modelNodes} scene={scene} />
        </PerspectiveCamera>
      </Canvas>
    </div>
  );
}
