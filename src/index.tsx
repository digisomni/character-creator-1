import React from 'react';
import ReactDOM from 'react-dom';
// @ts-expect-error ts-migrate(6142) FIXME: Module './App' was resolved to '/home/beast/Docume... Remove this comment to see the full error message
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
ReactDOM.render(<App />, document.getElementById('customizerUI'));
registerServiceWorker();
