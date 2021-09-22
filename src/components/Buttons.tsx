import React, { Component } from "react";
import ReactGA from "react-ga";
// @ts-expect-error ts-migrate(6142) FIXME: Module './PostForm' was resolved to '/home/beast/D... Remove this comment to see the full error message
import PostForm from './PostForm';

// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'mymi... Remove this comment to see the full error message
import MyMiniFactoryLogin from 'myminifactory-login';

// Loading Assets (SubComponents & CSS)
import "../css/buttons.css";

type State = any;

class Buttons extends Component<{}, State> {
  constructor(props: {}){
    super(props);
    this.state = {
      formVisible: false,
      accesstoken: ''
    }
  }

  updateVisible = (formVisible: any) => {
    this.setState({ formVisible });
  };

  componentDidMount() {
    // Google Analytics for the page
    ReactGA.initialize("UA-41837285-1");
  }

  render() {

    const redirectUri = (process.env.NODE_ENV==="development") ? 'http://localhost:3000' : 'https://www.myminifactory.com/character-creator/';
    const clientKey = (process.env.NODE_ENV==="development") ? 'customizerDev' : 'character-creator';

    const onSuccess = (response: any) => {
      console.log(response.access_token)
      this.setState({formVisible: true})
      this.setState({accesstoken: response.access_token})
    }
    const onFailure = (response: any) => console.error(response);


    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div
          className="abs buttons"
          id="download"
          onClick={() => {
            // @ts-expect-error ts-migrate(2551) FIXME: Property 'export' does not exist on type 'Window &... Remove this comment to see the full error message
            window.export((this.props as any).characterName);
            ReactGA.event({
              category: "MMF-Hero",
              action: "Download as STL"
            });
            for (const key in (this.props as any).loadedMeshes) {
              // check if the property/key is defined in the object itself, not in parent
              if ((this.props as any).loadedMeshes.hasOwnProperty(key)) {           
                  // console.log(key, this.props.loadedMeshes[key]);
ReactGA.event({
    category: "MMF-Hero",
    action: key,
    label: (this.props as any).loadedMeshes[key]
});
              }
            }
          }}
        >
          Download STL file
        </div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div
          className="abs buttons"
          id="buy"
          onClick={() => {
            ReactGA.event({
              category: "MMF-Hero",
              action: "Get it printed for £4.99!"  
            });
            (this.props as any).updatePopup(true);
            (this.props as any).updatePopupMessage("Sorry this feature is still in development...");
          }}
        >
          Get it printed for $4.99
        </div>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <MyMiniFactoryLogin
          className="abs buttons"
          clientKey={clientKey}
          redirectUri={redirectUri}
          buttonText="Share on MyMiniFactory.com"
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <PostForm
          visible={this.state.formVisible}
          updateVisible={this.updateVisible}
          accesstoken={this.state.accesstoken}
         />
      </div>
    );
  }
}

export default Buttons;
