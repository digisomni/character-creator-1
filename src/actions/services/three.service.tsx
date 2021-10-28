import axios from "axios";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { saveAs } from "file-saver";
import { useGLTF } from "@react-three/drei";

export const threeService = {
  changeBonePosition,
  updateMeshShape,
  loadModel,
  loadRandomizedModel,
  download,
};

async function loadModel(file: any, type: any) {
  if (type && type === "gltf/glb") {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
    return loader.loadAsync(file, function (progress) {
      return progress;
    });
  }
}

async function loadRandomizedModel(file: any, type: any, variables: any) {
  console.log(variables);
  // Random full body shapes
  const model = loadModel(file, type).then((mod: any) => {
    console.log(mod);
    variables.shapes.body.keys.map((key: any) => {
      const randomValue = Math.random();
      variables.shapes.body.targets.map((target: any) => {
        var mesh = mod.scene.getObjectByName(target);
        const index = mesh.morphTargetDictionary[key.name];
        if (index !== undefined) {
          mesh.morphTargetInfluences[index] = randomValue;
        }
      });
    });
    // Random Head Shapes ( Face, Nose, Mouth e.t.c. )
    variables.shapes.head.keys.map((key: any) => {
      const randomValue = Math.random();
      variables.shapes.head.targets.map((target: any) => {
        var mesh = mod.scene.getObjectByName(target);
        const index = mesh.morphTargetDictionary[key.name];
        if (index !== undefined) {
          mesh.morphTargetInfluences[index] = randomValue;
        }
      });
    });
    mod.scene.updateMatrixWorld(true);
    return mod;
  });
  return Promise.all([model]);
}

async function download(scene: any, fileName: any, screenshot: any) {
  const exporter = new GLTFExporter();

  //save(new Blob([text], { type: "text/plain" }), filename);
  const link = document.createElement("a");
  link.style.display = "none";
  document.body.appendChild(link);

  function save(blob, filename) {
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  function saveString(text, filename) {
    save(new Blob([text], { type: "text/plain" }), filename);
  }

  function saveArrayBuffer(buffer, filename) {
    save(new Blob([buffer], { type: "application/octet-stream" }), filename);
  }

  var options = {
    trs: false,
    onlyVisible: true,
    truncateDrawRange: true,
    binary: true,
    forcePowerOfTwoTextures: false,
    maxTextureSize: 4096 || Infinity,
  };
  exporter.parse(
    scene,
    function (result) {
      if (result instanceof ArrayBuffer) {
        saveArrayBuffer(result, "AAA_scene.glb");
      } else {
        var output = JSON.stringify(result, null, 2);
        console.log(output);
        saveString(output, "AAA_scene.gltf");
      }
    },
    options
  );
}

async function updateMeshShape(key: any, value: any, scene: any, targets: any) {
  if (key?.name && targets && value) {
    targets.map((target: any) => {
      var mesh = scene.getObjectByName(target);
      const index = mesh.morphTargetDictionary[key.name];
      if (index !== undefined) {
        mesh.morphTargetInfluences[index] = value;
      }
    });
  }
}

async function changeBonePosition(
  name: any,
  value: any,
  axis: any,
  scene: any
) {
  var bone = scene.getObjectByName(name);
  if (bone instanceof THREE.Bone) {
    switch (axis) {
      case "x":
        bone.rotation.x = value;
        break;
      case "y":
        bone.rotation.y = value;
        break;
      case "z":
        bone.rotation.z = value;
        break;
      default:
    }
    return value;
  }
}
