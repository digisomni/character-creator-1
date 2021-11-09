import * as React from "react";
import { apiService, threeService } from "../../actions/services";
import { useGlobalState } from "../../components/GlobalProvider";
import Scene from "../../components/Scene";
import Tools from "../../components/Tools";
import RandomizeButton from "../../components/Tools/randomize";

export default function Template(props: any) {
  const {
    setScene,
    scene,
    model,
    setModel,
    setTemplateInfo,
    templateInfo,
    randomize, 
    setRandomize
  }: any = useGlobalState();
  React.useEffect(() => {
    apiService.fetchTemplate(props.match.params.id).then((res) => {
      setTemplateInfo(res);
    });
  }, [props.match.params.id]);

  React.useEffect(() => {
    // console.log("Template Information Response: ", templateInfo);
    if (templateInfo?.file && templateInfo?.format && templateInfo?.editor) {
      threeService
        .loadModel(
          templateInfo?.file,
          templateInfo?.format
        )
        .then((model: any) => {
          if (model.scene) {
            setScene(model.scene);
            setModel(model);
            //setAnimations(animations);
            console.log("Template Loaded Once", model);
          }
        });
    }
  }, [templateInfo?.file]);

  React.useEffect(() => {
    if(templateInfo?.editor && model) {
    threeService.randomize(scene, templateInfo?.editor).then(() => {
      setRandomize(false);
      threeService.addTextToMesh(model.scene, "Shirt2", ("0" + Math.floor(Math.random() * 99)).slice(-2));
    });
  }
  }, [!randomize]);

  return (
    <React.Fragment>
      <Tools />
      <RandomizeButton />
      <Scene
        editor="generator"
        wrapClass="generator"
      />
    </React.Fragment>
  );
}
