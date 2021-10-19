import axios from "axios";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useGLTF } from "@react-three/drei";

export const threeService = {
  changeBonePosition,
  changeMorphInfluence,
  loadModel,
};

async function loadModel(file:any) {
  const loader = new GLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
loader.setDRACOLoader( dracoLoader );

// Load a glTF resource
loader.load(
	// resource URL
	'/models/templates/player.glb',
	// called when the resource is loaded
	function ( gltf ) {

		return gltf;

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    return null;

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );
    return null;

	}
);
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

async function changeMorphInfluence(
  name: any,
  value: any,
  scene: any,
  singular: any,
  array: any
) {
  if (name && singular) {
    var mesh = scene.getObjectByName(name);
    const index = mesh.morphTargetDictionary[array];
    if (index !== undefined) {
      mesh.morphTargetInfluences[index] = value;
    }
  }
}
