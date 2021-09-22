import React, { Component } from "react";
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import NumericInput from 'react-numeric-input';

import "../css/editor.css"

// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module '../library/bones.json'. Consid... Remove this comment to see the full error message
import bones from "../library/bones.json"
// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module '../library/poses/model.json'. ... Remove this comment to see the full error message
import model from "../library/poses/model.json"

type State = any;

class Editor extends Component<{}, State> {
  constructor(props: {}){
    super(props);
    this.state = {
      Torso_Hip : {x:0, y:0, z:0},
      Torso_Spine : {x:0, y:0, z:0},
      Torso_Chest : {x:0, y:0, z:0},
      Torso_Neck : {x:0, y:0, z:0},
      Torso_Sholder_L : {x:0, y:0, z:0},
      Torso_UpperArm_L : {x:0, y:0, z:0},
      ArmL_LowerArm_L : {x:0, y:0, z:0},
      ArmL_Hand_L : {x:0, y:0, z:0},
      Torso_Sholder_R : {x:0, y:0, z:0},
      Torso_UpperArm_R : {x:0, y:0, z:0},
      ArmR_LowerArm_R : {x:0, y:0, z:0},
      ArmR_Hand_R : {x:0, y:0, z:0},
      Torso_UpperLeg_L : {x:0, y:0, z:0},
      LegL_LowerLeg_L : {x:0, y:0, z:0},
      LegL_Foot_L : {x:0, y:0, z:0},
      Torso_UpperLeg_R : {x:0, y:0, z:0},
      LegR_LowerLeg_R : {x:0, y:0, z:0},
      LegR_Foot_R : {x:0, y:0, z:0},
    }
    this.exportPose = this.exportPose.bind(this);
  }
  
  componentDidMount() {
    for (let i=0; i<bones.length; i++){
      const bone = bones[i].bone;
      // window.getRotation(bone);
this.setState({ [bone]: (window as any).getRotation(bone) });
    }
  }


  exportPose(){
    for (let i=0; i<bones.length; i++){
      const bone = bones[i].bone;
      model[bone] = this.state[bone];
    }
    const jsonse = JSON.stringify(model);
    const element = document.createElement("a");
    const file = new Blob([jsonse], {type: "application/json"});
    element.href = URL.createObjectURL(file);
    element.download = "pose.json";
    element.click();
  }

  render() {

    //JSX element to display the HTML
    const controls = [];

    for (let i=0; i<bones.length; i++){
      const bone = bones[i].bone;
      controls.push(  
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="bone-control" key={i}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <p>{bones[i].name}</p>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="flexcontainer">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="control">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <NumericInput
                className="numeric-input"
                min={-3.1}
                max={3.1}
                step={0.1}
                value={Number(this.state[bone].x).toFixed(2)}
                onChange={(value: any) => {
                  // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
                  this.setState({ [bone]: { x: value, y: this.state[bone].y, z: this.state[bone].z } })
                  (window as any).changeRotation(bone, value, "x");
                }} />
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="control">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <NumericInput
                className="numeric-input"                            
                min={-3.1}
                max={3.1}
                step={0.1}
                value={Number(this.state[bone].y).toFixed(2)}
                onChange={(value: any) => {
                  // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
                  this.setState({ [bone]: { x: this.state[bone].x, y: value, z: this.state[bone].z } })
                  (window as any).changeRotation(bone, value, "y");
                }} />
            </div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="control">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <NumericInput
                className="numeric-input"
                min={-3.1}
                max={3.1}
                step={0.1}
                value={Number(this.state[bone].z).toFixed(2)}
                onChange={(value: any) => {
                  // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
                  this.setState({ [bone]: { x: this.state[bone].x, y: this.state[bone].y, z: value } })
                  (window as any).changeRotation(bone, value, "z");

                }} />
            </div>
          </div>
        </div>
      )
    }
      

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="controls">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <span className="unselectable">This is a beta feature only used to create new poses</span>
          {controls}
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="export" onClick={this.exportPose}>Export</div>  
      </div>
    );
  }
}

export default Editor;
