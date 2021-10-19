import * as React from "react";
import { NavLink } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import ParticlesBg from 'particles-bg';

import "./style.scss";
export default function Start() {
  return (
    <React.Fragment>
      <div className="start-wrap">
      <ParticlesBg num={300} type="cobweb" color="#003b63" bg={true} />
        <div className="screen">
          <div className="content vh-centered">
            <Typography variant="h6">Base</Typography>
            <Typography>Start From Scratch</Typography>
            <NavLink to="/base"><Button variant="outlined">Start</Button></NavLink>
          </div>
        </div>
        <div className="screen">
          <div className="content vh-centered">
            <Typography variant="h6">Template</Typography>
            <Typography>Choose Premade Avatar</Typography>
            <NavLink to="/template"><Button variant="outlined">Start</Button></NavLink>
          </div>
        </div>
        <div className="screen">
          <div className="content vh-centered">
            <Typography variant="h6">Custom</Typography>
            <Typography>Import Existing Avatar</Typography>
            <NavLink to="/custom"><Button variant="outlined">Start</Button></NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
