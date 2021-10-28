import * as React from "react";
import { apiService, threeService } from "../../actions/services";
import { useGlobalState } from "../../components/GlobalProvider";
import Scene from "../../components/Scene";
import Tools from "../../components/Tools";
import * as THREE from "three";
import { useGLTF, useProgress } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { Button } from "@mui/material";

export default function Generator(props: any) {
  const {
    setCategories,
    setCategoriesLoaded,
    setNodes,
    setScene,
    setMaterials,
    setAnimations,
    setTemplateInfo,
    templateInfo,
    randomize, 
    setRandomize
  }: any = useGlobalState();

  React.useEffect(() => {
    apiService.fetchTemplate("baller-uid").then((res) => {
      setTemplateInfo(res);
    });
  }, []);

  React.useEffect(() => {
    // console.log("Template Information Response: ", templateInfo);
    if (templateInfo?.file && templateInfo?.format && templateInfo?.editor) {
      threeService
        .loadRandomizedModel(
          templateInfo?.file,
          templateInfo?.format,
          templateInfo?.editor
        ) 
        .then((model: any) => {
          const { scene, animations } = model[0];
          let renderer = new THREE.WebGLRenderer({ antialias: true });
          if (scene) {
            setScene(scene);
            setAnimations(animations);
            console.log("Template Loaded Once");
          }
        });
        setRandomize(false);
        
    }
  }, [templateInfo?.file && randomize]);
  return (
    <React.Fragment>
      <Tools />
      <Scene
        editor="generator"
        wrapClass="generator"
      />
    </React.Fragment>
  );
}
