import React,{Component } from "react"
import { BrowserRouter,Route } from 'react-router-dom'
import { Router } from 'react-router'
import routes from './router'
import {Login} from './components/login'

export class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
          <div>
          <Route path="/" component={Login} />
          </div>
            
          </BrowserRouter>
        </div>
    )
  }
}