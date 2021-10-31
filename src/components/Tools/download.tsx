import * as React from 'react';
import { Button } from '@mui/material';
import { threeService } from '../../actions/services';
import { useGlobalState } from "../GlobalProvider";
import "./style.scss";

export function DownloadTools() {
  const {
    scene,
  }: any = useGlobalState();
  const downloadModel = () => {
  threeService.download(scene, "BBALL_Player", false);
  }
  return (
    <div className="tools">
    <Button onClick={() => downloadModel()}>Download GLTF</Button>
    </div>
  
  );
}
