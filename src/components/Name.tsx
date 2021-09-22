import React, { Component } from "react";

// Loading Assets (SubComponents & CSS)
import "../css/name.css";

class Name extends Component {
  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="name unselectable abs top left">
       {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
       <span className="my">My</span>MiniFactory
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <span className="beta">(Beta)</span>
      </div>
    );
  }
}

export default Name;
