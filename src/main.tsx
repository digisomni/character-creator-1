import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";

ReactDOM.render(
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div>
    App
  </div>,
  document.getElementById("root")
);
