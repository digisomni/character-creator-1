import * as React from "react";
import "./style.scss";

import { useGlobalState } from "../GlobalProvider";
import ToolsNavigation from "./navigation";
import { TemplateBodyTools } from "./body";
import { DownloadTools } from "./download";

export default function Tools(props: any) {
  const { navigation }: any = useGlobalState();

  return (
    <div className="tools-wrap">
      <ToolsNavigation />
      {navigation && navigation === "body" && <TemplateBodyTools />}
      {navigation && navigation === "download" && <DownloadTools />}
    </div>
  );
}
