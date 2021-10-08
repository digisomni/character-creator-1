import axios from "axios";
import * as THREE from "three";

export const threeService = {
    changeBoneRotation
};

async function changeBoneRotation(bone_name: any, value: any, axis: any, scene: any) {
  var bone = scene.getObjectByName(bone_name);
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
  }
}
