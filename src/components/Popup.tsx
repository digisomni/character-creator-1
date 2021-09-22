import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Loading Assets (SubComponents & CSS)
import "../css/popup.css";
import logo from "../graphic_assets/mmf_logo.png";

class Popup extends Component {
    
  render() {
   if ((this.props as any).popupDisplayed){ 
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        return (<div className="screen abs top left">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <div className="popup abs">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <img className="abs" src={logo} alt="company logo"/>   
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <div className="abs message">
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <p>{(this.props as any).message}</p>
                    </div>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <FontAwesomeIcon className="abs cross" icon="times-circle" onClick={() => {
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'updatePopup' does not exist on type 'Rea... Remove this comment to see the full error message
        this.props.updatePopup(false);
    }}/>
                </div>
            </div>);
                        (this.props as any).updatePopup(false);
                    }}/>
                // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
                </div>
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'div'.
            </div>
          );
    } else {
        return (
            <div></div>
        );
    }
    
  }
}

export default Popup;
