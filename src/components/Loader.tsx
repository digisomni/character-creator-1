import React, { Component } from 'react';

import logo from './../graphic_assets/logo.jpg';
import '../css/loader.css'

class Loader extends Component {

    render() {
        if ((this.props as any).visible) {
            return (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="screen abs top left">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <div className="abs circle">
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            );
        } else {
            return (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div />
            );
        }

    }
}
export default Loader;
