import React, { Component } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Typed from "react-typed";

import { library } from "@fortawesome/fontawesome-svg-core";

// fontawesome imports
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// Google Analytics
import ReactGA from "react-ga";
// import axios from "axios";

// Loading assets
import "./css/master.css";

// Loading the data this way for now
import data from "./library/category.json";

// Loading the different components
import Name from "./components/Name";
import Category from "./components/Category";
import Buttons from "./components/Buttons";
import Popup from "./components/Popup";
import PageLoader from "./components/PageLoader";
import PartLoader from "./components/PartLoader";


library.add(faTimesCircle);
library.add(faDollarSign);
library.add(faLink);
library.add(faSearch);

type State = any;

class App extends Component<any, State> {
  updatePose: any;
  constructor(props: any) {
    super(props);
    this.state = {
      category: data,
      currentCategory: "head",
      characterName: "myCharacter",
      UIDisplayed: true,
      popup: false,
      loadedMeshes: {
        Torso: "turtle_torso",
        LegR: "default_leg_R",
        LegL: "default_leg_L",
        Head: "default_head",
        ArmR: "default_arm_R",
        ArmL: "default_arm_L",
        HandR: "open_hand_R",
        HandL: "open_hand_L",
        FootR: "default_foot_R",
        FootL: "default_foot_L",
        Stand: "circle"
      },
      editor: true,
      partloading: false,
      message:"Sorry this feature is still in development..."
    };
  }

  // Update the state of parent App from child Component
  updateCategory = (currentCategory: any) => {
    this.setState({ currentCategory });
  };
  updateCharacterName = (characterName: any) => {
    this.setState({ characterName });
  };
  updatePopup = (popup: any) => {
    this.setState({ popup });
  };
  updateMeshes = (loadedMeshes: any) => {
    this.setState({ loadedMeshes });
  };
  updateLoading = (partloading: any) => {
    this.setState({ partloading });
  };
  updatePopupMessage = (message: any) => {
    this.setState({ message });
  };

  componentDidMount() {
    // Google Analytics for the page
    ReactGA.initialize("UA-41837285-1");
    ReactGA.pageview("/mmf-hero");
  }

  render() {
    return (
      <div>
        <BrowserView>
          <PageLoader />
          <Name
            characterName={this.state.characterName}
            updateCharacterName={this.updateCharacterName}
          />
          <Buttons
            characterName={this.state.characterName}
            updatePopup={this.updatePopup}
            updatePopupMessage={this.updatePopupMessage}
            loadedMeshes={this.state.loadedMeshes}
          />
          <Popup
            popupDisplayed={this.state.popup}
            message={this.state.message}
            updatePopup={this.updatePopup}
          />
          <Category
            category={this.state.category}
            currentCategory={this.state.currentCategory}
            updateCategory={this.updateCategory}
            updatePose={this.updatePose}
            UIDisplayed={this.state.UIDisplayed}
            loadedMeshes={this.state.loadedMeshes}
            updateMeshes={this.updateMeshes}
            updatePopup={this.updatePopup}
            updatePopupMessage={this.updatePopupMessage}
            editor={this.state.editor}
            updateLoading={this.updateLoading}
          />
          <PartLoader 
            loading={this.state.partloading}
            updateLoading={this.updateLoading}
          />
        </BrowserView>
        <MobileView>
          <div className="abs top left smartphone">
            <div className="fullScreenMessage">
              <Typed
                strings={[
                  "Sorry, this content is currently unavailable on mobile... ^2000",
                  "Come back soon for updates!"
                ]}
                typeSpeed={40}
                showCursor={false}
              />
            </div>
          </div>
        </MobileView>
      </div>
    );
  }
}

export default App;
