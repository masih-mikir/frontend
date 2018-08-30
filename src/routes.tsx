import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ProductListPage } from './pages/ProductListPage';
import { ProductPage } from './pages/ProductPage';

const ROUTES = (
    <Switch>
        <Route path='/' exact={true} component={HomePage}/>
        <Route path='/destinations/:cityName' component={ProductPage} />
        <Route path='/destinations' component={ProductListPage}/>
    </Switch>
);

export class AppRoutes extends React.Component {
    public render() {
        return ROUTES;
    }
}
