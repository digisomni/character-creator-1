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
import logo from "./graphic_assets/mmf_logo.png";

// Loading the data this way for now
// @ts-expect-error ts-migrate(2732) FIXME: Cannot find module './library/category.json'. Cons... Remove this comment to see the full error message
import data from "./library/category.json";

// Loading the different components
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Name' was resolved to '/home/... Remove this comment to see the full error message
import Name from "./components/Name";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Footer' was resolved to '/hom... Remove this comment to see the full error message
import Footer from "./components/Footer";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Category' was resolved to '/h... Remove this comment to see the full error message
import Category from "./components/Category";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Buttons' was resolved to '/ho... Remove this comment to see the full error message
import Buttons from "./components/Buttons";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Popup' was resolved to '/home... Remove this comment to see the full error message
import Popup from "./components/Popup";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/Logo' was resolved to '/home/... Remove this comment to see the full error message
import Logo from "./components/Logo";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/PageLoader' was resolved to '... Remove this comment to see the full error message
import PageLoader from "./components/PageLoader";
// @ts-expect-error ts-migrate(6142) FIXME: Module './components/PartLoader' was resolved to '... Remove this comment to see the full error message
import PartLoader from "./components/PartLoader";


library.add(faTimesCircle);
library.add(faDollarSign);
library.add(faLink);
library.add(faSearch);

type State = any;

class App extends Component<{}, State> {
  updatePose: any;
  constructor(props: {}) {
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
    // axios({
    //   method: "get",
    //   url: "https://www.myminifactory.com/api/v2/search",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer b43ab57d-15f3-4c76-928a-ffa7a5662f1b"
    //   },
    //   params:{
    //     q: "CharacterCreator"
    //   }
    // }).then(response => {
    //   console.log(response)
    // });
  }

  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <BrowserView>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <PageLoader />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Logo />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Name
            characterName={this.state.characterName}
            updateCharacterName={this.updateCharacterName}
          />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Footer />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Buttons
            characterName={this.state.characterName}
            updatePopup={this.updatePopup}
            updatePopupMessage={this.updatePopupMessage}
            loadedMeshes={this.state.loadedMeshes}
          />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Popup
            popupDisplayed={this.state.popup}
            message={this.state.message}
            updatePopup={this.updatePopup}
          />
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <PartLoader 
            loading={this.state.partloading}
            updateLoading={this.updateLoading}
          />
        </BrowserView>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <MobileView>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <div className="abs top left smartphone">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <img src={logo} alt="company logo" />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <div className="fullScreenMessage">
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
