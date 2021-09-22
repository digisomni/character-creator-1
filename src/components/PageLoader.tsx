import React, { Component } from 'react';
import $ from "jquery";
import '../css/loader.css'

type State = any;

class PageLoader extends Component<any, State> {
    check: any;

    constructor(props: any) {
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
                <div className="blackscreen abs top left">
                </div>
            );
        } else {
            return (
                <div />
            );
        }

    }
}
export default PageLoader;
