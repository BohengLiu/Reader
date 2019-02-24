import React,{Component } from 'react'

export class Shelf extends Component{
  
  logfile(e){
    e.persist()
    console.log(e)
    let targetFile = e.target.files[0]
    console.log(file)
    if (window.FileReader) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(targetFile);
      console.log(reader)
      reader.onload = (e) => {
        console.log('onload e:',e)
      }
    } else {
      alert('Your browser does not support the required features. Please use a modern browser such as Google Chrome, or Mozilla Firefox')
    }
  }

  fileonload(){
    console.log()
  }

  render() {
    return (
      <div>
        <h1>Book Shelf</h1>
        <input id="file" type='file' onChange={this.logfile.bind(this)} />
      </div>
    )
  }
}