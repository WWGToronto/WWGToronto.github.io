import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ScrollToTop } from './components'
import { routes as r } from './routes';

import './app.css'


const routes = r.map((route, index) =>
  <Route
    key={index}
    exact={route.path === '/'}
    path={route.path}
    component={route.component}
  />
);

export default function App(): JSX.Element {
  return (
    <Router basename={'/'}>
      <ScrollToTop>
        <div className={'courier'}>
          <Switch>
            {routes}
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}
