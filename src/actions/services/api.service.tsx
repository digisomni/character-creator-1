// THIS IS A TEMPORARY SOLUTION BEFORE WE HAVE AN API ENDPOINT
// THe Data is just fetched from local json files.

import axios from "axios";

// IMPORT LOCAL DATA FOR TESTING
import CategoryData from "../../library/category.json";
import headElements from "../../library/heads.json";
import handElements from "../../library/hands.json";
import armElements from "../../library/arm.json";
import torsoElements from "../../library/torso.json";
import footElements from "../../library/foot.json";
import legElements from "../../library/leg.json";
import standElements from "../../library/stands.json";
import poseElements from "../../library/poses.json";
import bones from "../../library/bones.json";

export const apiService = {
  fetchCaterories,
  fetchElements,
  fetchBones,
  filterElements,
};

async function fetchCaterories() {
  return CategoryData;
}

async function fetchBones() {
  return bones;
}

async function fetchElements(category, isLeft: any) {
  let library: any;
  let sideIdencator: any;
  let meshType: any;
  switch (category) {
    case "head":
      library = headElements;
      sideIdencator = false;
      meshType = "Head";
      break;
    case "hand":
      library = handElements;
      sideIdencator = true;
      meshType = isLeft ? "HandL" : "HandR";
      break;
    case "arm":
      library = armElements;
      sideIdencator = true;
      meshType = isLeft ? "ArmL" : "ArmR";
      break;
    case "torso":
      library = torsoElements;
      sideIdencator = false;
      meshType = "Torso";
      break;
    case "foot":
      library = footElements;
      sideIdencator = true;
      meshType = isLeft ? "FootL" : "FootR";
      break;
    case "leg":
      library = legElements;
      sideIdencator = true;
      meshType = isLeft ? "LegL" : "LegR";
      break;
    case "pose":
      library = poseElements;
      sideIdencator = false;
      break;
    case "stand":
      library = standElements;
      sideIdencator = false;
      break;
    default:
      library = headElements;
      sideIdencator = false;
  }
  return library;
}

async function filterElements(search: any, elements: any, category: any) {
  if (elements && elements.length && category) {
    let value = search;
    const val = value.toString().toLowerCase();
    const valueArray = val.split(" ");

    if (value) {
      let filteredElementsData = elements.filter((item) => {
        return valueArray.every((eachKey) => {
          if (!eachKey.length) {
            return true;
          }
          return item.name.toString().toLowerCase().includes(eachKey);
        });
      });
      return {
        data: filteredElementsData,
      };
    }
  }
}
