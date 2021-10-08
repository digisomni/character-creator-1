import * as React from "react";
import Typography from "@mui/material/Typography";
import { Scrollbars } from "react-custom-scrollbars";
import "./style.scss";

import { useGlobalState } from "../GlobalProvider";
import { ChangeRotationSlider } from "./sliders";
import MeshSelector from "./selections";

export default function Tools(props: any) {
  const { modelNodes, characterName, setCharacterName }: any = useGlobalState();
  return (
    <div className="tools-wrap">
      <MeshSelector />
      <Scrollbars className="scroll">
        <div className="editor-list">
          {modelNodes &&
            Object.keys(modelNodes).map((keyName, i) => {
              //console.log(modelNodes[keyName]);
              if (modelNodes[keyName].type === "Bone") {
                var boneTitle = modelNodes[keyName]?.name;
                var cleanBoneTitle = boneTitle.replace("CC_Base_", "");
                return (
                  <div key={i}>
                    <Typography variant="h6">
                      {cleanBoneTitle.replace("_", " ")}
                    </Typography>
                    <Typography>
                      X: {modelNodes[keyName]?.position?.x}
                    </Typography>
                    <div className="slider">
                      <ChangeRotationSlider
                        name={modelNodes[keyName]?.name}
                        value={modelNodes[keyName]?.position?.x}
                        axis="x"
                      />
                    </div>
                    <Typography>
                      Y: {modelNodes[keyName]?.position?.y}
                    </Typography>
                    <div className="slider">
                      <ChangeRotationSlider
                        name={modelNodes[keyName]?.name}
                        value={modelNodes[keyName]?.position?.y}
                        axis="y"
                      />
                    </div>
                    <Typography>
                      Z: {modelNodes[keyName]?.position?.z}
                    </Typography>
                    <div className="slider">
                      <ChangeRotationSlider
                        name={modelNodes[keyName]?.name}
                        value={modelNodes[keyName]?.position?.z}
                        axis="z"
                      />
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Scrollbars>
    </div>
  );
}
