import React, { Suspense } from "react";
import "./assets/styles/main.scss";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import CharacterEditor from "./components/CharacterEditor";
import { PrivateRoute } from "./components/AuthContextWrap";

import CharacterEditor from "./pages/CharacterEditor";
import { GPRoute } from "./components/GlobalProvider";

// Importing Pages
import Start from "./pages/Start";
import Template from "./pages/Template";
import Base from "./pages/Base";
import Custom from "./pages/Custom";
import Navigation from "./components/Navigation";
import Generator from "./pages/Generator";

export default function App() {
  return (
    <Suspense fallback="loading...">
      <BrowserView>
        <Navigation />
        <Router>
          <Switch>

            <GPRoute path="/" exact component={Start} />
            <GPRoute path="/base" exact component={Base} />
            <GPRoute path="/template/:id" exact component={Template} />
            <GPRoute path="/custom" exact component={Custom} />
            <PrivateRoute path="/editor" exact component={CharacterEditor} />
            <GPRoute path="/character-editor" exact component={CharacterEditor} />

            { /* For testing purposes only */ }
            <GPRoute path="/generator/:id" exact component={Generator} />

          </Switch>
        </Router>
      </BrowserView>
      <MobileView>
        <div className="abs top left smartphone">
          <div className="fullScreenMessage">
          </div>
        </div>
      </MobileView>
    </Suspense>
  );
}
