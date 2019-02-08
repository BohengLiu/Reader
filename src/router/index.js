import React from 'react'
import { Route, Redirect } from 'react-router-dom'
//LoginDemo
import {Login} from '../components/login'

export default (
  <Route >
    {/* <IndexRoute component={Index} /> */}
    {/* <Route path="/index" component={Index} /> */}
    <Route path="/login" component={Login} />

    {/*404页面*/}
    <Redirect path="/*" to="/login" />
  </Route>
)