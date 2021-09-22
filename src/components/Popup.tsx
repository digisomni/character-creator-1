/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Loading Assets (SubComponents & CSS)
import "../css/popup.css";

class Popup extends Component<any> {

    render() {

        if ((this.props as any).popupDisplayed) {
            return (<div className="screen abs top left">
                <div className="popup abs">
                    <div className="abs message">
                        <p>{(this.props as any).message}</p>
                    </div>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                    <FontAwesomeIcon className="abs cross" icon="times-circle" onClick={() => {
                        return (this.props as any).updatePopup(false);
                    }} />
                </div>
            </div>);
        }
        else {
            return (
                <div></div>
            );
        }
    }
}

export default Popup