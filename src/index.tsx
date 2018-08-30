import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

class DocRoot extends React.Component<{}, {}> {
  public render() {
    return (
      <Router>
        <App/>
      </Router>
    );
  }
}

ReactDOM.render(
  <DocRoot />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
