import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import {routes} from './router'
const router = () => (
  <HashRouter>
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          component={route.component}
        />
      ))}
      <Redirect exact from="/" to="/a" />
      <Redirect exact from="/*" to="/404" />
    </Switch>
  </HashRouter>
)

export default router
