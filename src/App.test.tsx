import React from 'react';
import ReactDOM from 'react-dom';
// @ts-expect-error ts-migrate(6142) FIXME: Module './App' was resolved to '/home/beast/Docume... Remove this comment to see the full error message
import App from './App';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
it('renders without crashing', () => {
  const div = document.createElement('div');
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
