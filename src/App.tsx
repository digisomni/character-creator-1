import React, { Component, useState, Suspense } from "react";
import "./assets/styles/main.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import CharecterEditor from "./components/CharacterEditor";
import { PrivateRoute } from "./components/AuthContextWrap";

import CharacterEditor from "./pages/CharacterEditor";

// Importing Route Component with Global Variables
import { GPRoute } from "./components/GlobalProvider";

// Importing Pages
import Start from "./pages/Start";
import Template from "./pages/Template";
import Base from "./pages/Base";
import Custom from "./pages/Custom";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <Suspense fallback="loading...">
      <BrowserView>
        <Navigation />
        <Router>
          <Switch>

            <GPRoute path="/" exact component={Start} />
            <GPRoute path="/base" exact component={Base} />
            <GPRoute path="/template" exact component={Template} />
            <GPRoute path="/template/:id" exact component={Template} />
            <GPRoute path="/custom" exact component={Custom} />

            <PrivateRoute path="/editor" exact component={CharecterEditor} />
            <GPRoute path="/character-editor" exact component={CharacterEditor} />

          </Switch>
        </Router>
      </BrowserView>
      <MobileView>
        <div className="abs top left smartphone">
          <div className="fullScreenMessage">
            Sorry, this content is currently unavailable on mobile... ^2000",
            "Come back soon for updates!
          </div>
        </div>
      </MobileView>
    </Suspense>
  );
}
