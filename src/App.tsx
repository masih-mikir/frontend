import * as React from 'react';

import Navbar from 'src/pages/Navbar';
import { AppRoutes } from './routes';

export class App extends React.Component {
  public render() {
    return (
      <div>
        <Navbar/>
        <AppRoutes/>
      </div>
    );
  }
}
