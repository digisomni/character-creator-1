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

export default function App() {
  return (
    <Suspense fallback="loading...">
      <BrowserView>
        <Router>
          <Switch>
            <PrivateRoute path="/editor" exact component={CharecterEditor} />
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
