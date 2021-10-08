import * as React from "react";
import { Route } from "react-router-dom";
// import { meshService, apiService } from "../../actions/services";
import * as THREE from "three";
import {
  useGLTF,
} from "@react-three/drei";

const GlobalContext = React.createContext({});

export const GPRoute = ({ component: Component, ...rest }) => {
  // General State Hooks
  // ---------- //
  // Which character creator/generator is chosen ( base , template , custom )
  const [generator, setGenerator] = React.useState<string>("");

  // State Hooks For Character Editor ( Base ) //
  // ---------- //
  // Charecter Name State Hook ( Note: this state will also update the name over the 3D model. )
  const [characterName, setCharacterName] = React.useState<string>("Character Name");
  // Categories State and Loaded Hooks
  const [categories, setCategories] = React.useState([]);
  const [categoriesLoaded, setCategoriesLoaded] = React.useState<boolean>(false);
  // Collections State and Loaded Hooks 
  const [collection, setCollection] = React.useState([]);
  const [collectionLoaded, setCollectionLoaded] = React.useState<boolean>(false);
  // Bones State and Loaded Hooks
  const [bones, setBones] = React.useState([]);
  const [bonesLoaded, setBonesLoaded] = React.useState<boolean>(false);
  // Pose State Hook
  const [pose, setPose] = React.useState(undefined);
  const [poseSelected, setPoseSelected] = React.useState("default");
  // Selected category State Hook
  const [category, setCategory] = React.useState({
    name: "head",
    sideIndicator: false,
  });

  // 3D Model Content State Hooks ( Scene, Nodes, Materials, Animations e.t.c ) //
  const [modelNodes, setModelNodes] = React.useState<object>(Object);

  const { nodes, scene, materials, animations }: any = useGLTF(
    "/models/TestModel.glb"
  );

  React.useEffect(() => {
    if (nodes) {
      setModelNodes(nodes);
    }
  }, [nodes]);

  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <GlobalContext.Provider
            value={{
              generator,
              setGenerator,
              // --------- //
              categories,
              setCategories,
              categoriesLoaded,
              setCategoriesLoaded,
              category,
              setCategory,
              modelNodes,
              setModelNodes,
              characterName,
              setCharacterName,
              scene
            }}
          >
            <Component {...props} />
          </GlobalContext.Provider>
        );
      }}
    />
  );
};
useGLTF.preload("/models/CharacterCreatorBaseModels.glb");
export const useGlobalState = () => React.useContext(GlobalContext);
