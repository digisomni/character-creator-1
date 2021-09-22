import React, { Component } from 'react';

import '../css/loader.css'

class PartLoader extends Component<any> {
    check: any;

    componentDidUpdate() {
        this.check = setInterval(() => {
            if ((window as any).partloaded) {
                clearInterval(this.check);
                // eslint-disable-next-line react/prop-types
                (this.props as any).updateLoading(false);
                return;
            }
        }, 200);
    }

    UNSAFE_componentWillUpdate() {
        clearInterval(this.check)
    }

    render() {
        // eslint-disable-next-line react/prop-types
        if ((this.props as any).loading) {
            return (
                <div className="screen abs top left">
                </div>
            );
        } else {
            return (
                <div />
            );
        }

    }
}
export default PartLoader;
