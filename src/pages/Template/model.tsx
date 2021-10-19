import * as React from "react";
import { apiService, threeService } from "../../actions/services";
import { useGlobalState } from "../../components/GlobalProvider";
import { useGLTF } from "@react-three/drei";

export default function Model(props: any) {
  const { setNodes, setScene, setMaterials, setAnimations }: any =
    useGlobalState();
  if (props?.file) {
    const { nodes, scene, materials, animations }: any = useGLTF(props.file);

    React.useEffect(() => {
      if (nodes) {
        setNodes(nodes);
        setScene(scene);
        setMaterials(materials);
        setAnimations(animations);
      }
    }, [nodes]);
    useGLTF.preload(props.file);
  }
  return null;
}
