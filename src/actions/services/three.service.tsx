import axios from "axios";
import * as THREE from "three";

export const threeService = {
  changeBonePosition,
  changeMorphInfluence,
};

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

async function changeMorphInfluence(name: any, value: any, scene: any, singular: any, array: any) {
  if (name && singular) {
    var mesh = scene.getObjectByName(name);
    const index = mesh.morphTargetDictionary[array];
    if (index !== undefined) {
      mesh.morphTargetInfluences[index] = value;
    }
  }
}
