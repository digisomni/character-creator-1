import React, { useState } from "react";
import "./style.scss";
import { BrowserView, MobileView } from "react-device-detect";
import Typed from "react-typed";
import MeshSelector from "../../components/MeshEditor";
import DownloadCharacter from "../Download";
import Lod from "../../components/Lod";

export default function CharecterEditor() {
  return (
    <div>
      <BrowserView>
        <MeshSelector />
        <Lod />
        <DownloadCharacter />
      </BrowserView>
      <MobileView>
        <div className="abs top left smartphone">
          <div className="fullScreenMessage">
            <Typed
              strings={[
                "Sorry, this content is currently unavailable on mobile... ^2000",
                "Come back soon for updates!",
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
