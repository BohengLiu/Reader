import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
//LoginDemo
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { Shelf } from "../pages/shelf";
import { Book } from "../pages/book";

class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* <IndexRoute component={Index} /> */}
        {/* <Route path="/index" component={Index} /> */}
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/shelf" component={Shelf} />
        <Route path="/book" component={Book} />

        {/*404页面*/}
        <Redirect path="/*" to="/login" />
      </Switch>
    );
  }
}

export default Routes;
// export default (
//   <Switch>
//     {/* <IndexRoute component={Index} /> */}
//     {/* <Route path="/index" component={Index} /> */}
//     {/* <Route path='/' exact={true} component={Home} /> */}
//     <Route path="/login" component={Login} />

//     {/*404页面*/}
//     <Redirect path="/*" to="/login" />
//   </Switch>
// )
