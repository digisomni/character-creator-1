import axios from "axios";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { VRMLoader } from "three/examples/jsm/loaders/VRMLoader";
import { VRM } from "@pixiv/three-vrm";

export const threeService = {
  loadModel,
  loadModelRandomized,
  randomize,
  updatePose,
  updateMorphValue,
  addTextToMesh,
  getMorphValue,
  download,
};

async function addTextToMesh(scene: any, target: any, text: any) {
  var canvas = document.createElement("canvas");
  var context: any = canvas.getContext("2d");

  context.font = 20 + "px bold Arial";

  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = "red";
  context.fillText("name", 150, 30);
  context.font = 50 + "px bold Arial";
  context.miterLimit = 5;
  context.lineWidth = 4;
  context.strokeStyle = "white";
  context.strokeText(text, 150, 70);
  context.lineWidth = 8;
  context.fillStyle = 0x909090;
  context.fillText(text, 150, 70);

  var texture = new THREE.Texture(canvas);
  console.log(texture);
  texture.needsUpdate = true;
  texture.flipY = false;
  // return texture;
  let mesh = scene.getObjectByName("Shirt2");

  texture.repeat.set(1, 1);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  var material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: 0,
  });
  mesh.material = material;
}

async function loadModel(file: any, type: any) {
  if (type && type === "gltf/glb" && file) {
    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("../node_modules/three/examples/js/libs/draco/");
    loader.setDRACOLoader(dracoLoader);
    return loader.loadAsync(file).then((model) => {
      return model;
    });
  }

  if (type && type === "vrm" && file) {
    const loader = new VRMLoader();
    return loader.loadAsync(file).then((model) => {
      //console.log("AAAAAAAA",model);
      VRM.from(model).then((vrm) => {
        console.log("VRM Model: ", vrm);
      });
      return model;
    });
  }
}

async function loadModelRandomized(file: any, type: any, variables: any) {
  if (file && type && variables) {
    const model = loadModel(file, type).then((mod: any) => {
      variables.shapes.map((shape: any) => {
        shape.keys.map((key: any) => {
          const randomValue = Math.random();
          shape.targets.map((target: any) => {
            var mesh = mod.scene.getObjectByName(target);
            const index = mesh.morphTargetDictionary[key.name];
            if (index !== undefined) {
              mesh.morphTargetInfluences[index] = randomValue;
            }
          });
        });
      });
      return mod;
    });
    return Promise.all([model]);
  }
}

async function randomize(scene: any, variables: any) {
  if (scene && variables) {
    variables.shapes.map((shape: any) => {
      shape.keys.map((key: any) => {
        const randomValue = Math.random();
        shape.targets.map((target: any) => {
          var mesh = scene.getObjectByName(target);
          const index = mesh.morphTargetDictionary[key.name];
          if (index !== undefined) {
            mesh.morphTargetInfluences[index] = randomValue;
          }
        });
      });
    });
  }
}

async function getMorphValue(key: any, scene: any, target: any) {
  if (key && scene) {
    var mesh = scene.getObjectByName(target);
    const index = mesh.morphTargetDictionary[key];
    if (index !== undefined) {
      return mesh.morphTargetInfluences[index];
    }
  }
}

async function updateMorphValue(
  key: any,
  value: any,
  scene: any,
  targets: any
) {
  if (key && targets && value) {
    targets.map((target: any) => {
      var mesh = scene.getObjectByName(target);
      const index = mesh.morphTargetDictionary[key];
      if (index !== undefined) {
        mesh.morphTargetInfluences[index] = value;
      }
    });
  }
}

async function updatePose(name: any, value: any, axis: any, scene: any) {
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

async function download(
  model: any,
  fileName: any,
  format: any,
  screenshot: any
) {
  // We can use the SaveAs() from file-saver, but as I reviewed a few solutions for saving files,
  // this approach is more cross browser/version tested then the other solutions and doesn't require a plugin.
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

  // Specifying the name of the downloadable model
  const downloadFileName = `${
    fileName && fileName !== "" ? fileName : "CharacterCreatorModel"
  }`;

  if (format && format === "gltf/glb") {
    const exporter = new GLTFExporter();
    var options = {
      trs: false,
      onlyVisible: true,
      truncateDrawRange: true,
      binary: true,
      forcePowerOfTwoTextures: false,
      maxTextureSize: 4096 || Infinity,
    };
    exporter.parse(
      model.scene,
      function (result) {
        if (result instanceof ArrayBuffer) {
          saveArrayBuffer(result, `${downloadFileName}.glb`);
        } else {
          var output = JSON.stringify(result, null, 2);
          saveString(output, `${downloadFileName}.gltf`);
        }
      },
      options
    );
  } else if (format && format === "obj") {
    const exporter = new OBJExporter();
    saveArrayBuffer(exporter.parse(model.scene), `${downloadFileName}.obj`);
  } else if (format && format === "vrm") {
    model.userData.gltfExtensions = { VRM: {} };
    console.log("VRM ModelAAAAAA: ", model);
    VRM.from(model).then((vrm) => {
      console.log("VRM Model: ", vrm);
      //saveArrayBuffer(vrm, `${downloadFileName}.vrm`);
    });
  }
}
