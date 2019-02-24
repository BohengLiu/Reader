import React,{Component } from "react"
import { Router,Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
// import { Router } from 'react-router'
import Routes from './router'


const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

const history = syncHistoryWithStore(browserHistory, routingStore)

export class App extends Component {
  render() {
    return (
        <div>
          <Router history={history}>
            <Route component={Routes} />
          </Router>
        </div>
    )
  }
}