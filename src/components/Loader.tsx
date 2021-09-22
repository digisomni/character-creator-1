import React, { Component } from 'react';

import '../css/loader.css'

class Loader extends Component<any> {

    render() {
        if ((this.props as any).visible) {
            return (
                <div className="screen abs top left">
                    <div className="abs circle">
                    </div>
                </div>
            );
        } else {
            return (
                <div />
            );
        }

    }
}
export default Loader;
