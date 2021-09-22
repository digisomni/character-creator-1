import React, { Component } from "react";
// @ts-expect-error ts-migrate(6142) FIXME: Module './Popup' was resolved to '/home/beast/Docu... Remove this comment to see the full error message
import Popup from './Popup';

import "../css/footer.css";

type State = any;

class Footer extends Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      message: "",
      popup: false
    };
  }

  updatePopup = (popup: any) => {
    this.setState({ popup });
  };

  render() {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Popup
            popupDisplayed={this.state.popup}
            message={this.state.message}
            updatePopup={this.updatePopup}
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div className="licence abs bottom">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <a onClick={ () => {
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            const content = <span className="a-licence">Licensing associated with files download from Character Creator (beta):
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <a href="https://www.myminifactory.com/pages/object-licensing">Credit Designer</a>,
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <a href="https://www.myminifactory.com/pages/object-licensing">Remixing Allowed</a>,
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <a href="https://www.myminifactory.com/pages/object-licensing">Commercial Use Not Allowed</a></span>
            this.setState({popup: true, message: content});
          }}>Licence Information</a> | 
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <a onClick={() => {
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            const content = <span>If you are a Designer or a Brand who would like to create their own custom Creator tool, or if you have any other questions, please get in touch via our <a href="https://www.myminifactory.com/contact_us/">contact form.</a></span>
            this.setState({popup: true, message: content});
          }}> Want to create you're own customizer or contact us?</a>
        </div>
      </div>
    );
  }
}

export default Footer;
