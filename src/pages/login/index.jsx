import React,{Component } from 'react'

export class Login extends Component{
  constructor(){
    super()
    this.state = {
      file:''
    }
  }
  logfile(e){
    e.persist()
    console.log(e)
  }

  fileonload(){
    console.log()
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input id="file" type='file' onChange={this.logfile.bind(this)} />
      </div>
    )
  }
}