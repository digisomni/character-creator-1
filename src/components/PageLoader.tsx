import React, { Component } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'jque... Remove this comment to see the full error message
import $ from "jquery";

import logo from './../graphic_assets/logo.jpg';
import '../css/loader.css'

type State = any;

class PageLoader extends Component<{}, State> {
    check: any;

    constructor(props: {}) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        $('.graybackground').css('visibility', 'hidden')
        this.check = setInterval(() => {
            if ((window as any).loaded) {
                clearInterval(this.check)
                this.setState({ loading: false })
                return;
            }
        }, 1000);
    }


    render() {
        if (this.state.loading) {
            return (
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div className="blackscreen abs top left">
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
export default PageLoader;
