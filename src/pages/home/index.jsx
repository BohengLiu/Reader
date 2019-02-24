import React,{Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component{
  handleTurnToLogin = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/login">To Login</Link>
        <button onClick={this.handleTurnToLogin}>To Login</button>
        <Link to="/shelf">To Shelf</Link>
      </div>
    )
  }
}