import * as React from "react";
import { apiService, threeService } from "../../actions/services";
import { useGlobalState } from "../../components/GlobalProvider";
import Scene from "../../components/Scene";
import Tools from "../../components/Tools";
import { useGLTF, useProgress } from "@react-three/drei";

export default function Template(props: any) {
  const {
    setCategories,
    setCategoriesLoaded,
    setNodes,
    setScene,
    setMaterials,
    setAnimations,
    setTemplateInfo,
    templateInfo,
  }: any = useGlobalState();

  const [loadedModel, setLoadedModel] = React.useState<any>();
  threeService.loadModel("/models/templates/basketball_player.glb").then((res) => {
    console.log(res);
  });
  return (
    <React.Fragment>
      <Tools />
      <Scene editor="template" wrapClass="template" />
    </React.Fragment>
  );
}
//useGLTF.preload("/models/templates/basketball_player.glb");
