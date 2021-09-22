import React, { Component } from 'react';

import logo from './../graphic_assets/logo.jpg';
import '../css/loader.css'

class PartLoader extends Component {
    check: any;

    componentDidUpdate() {
        this.check = setInterval(() => {
            if ((window as any).partloaded) {
                // @ts-expect-error ts-migrate(2349) FIXME: This expression is not callable.
                clearInterval(this.check)
                (this.props as any).updateLoading(false);
                return;
            }
        }, 200);
    }

    componentWillUpdate() {
        clearInterval(this.check)
    }

    render() {
        if ((this.props as any).loading) {
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
export default PartLoader;
