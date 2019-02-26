import React,{Component } from 'react'
import ePub from 'epubjs'

export class Shelf extends Component{
  
  constructor() {
    super()
    this._book = ePub()
    this.rendition = {}
  }
  
  logfile(e) {
    e.persist()
    console.log(e)
    let targetFile = e.target.files[0]
    console.log(file)
    if (window.FileReader) {
      const reader = new FileReader();
      
      // console.log(reader)
      reader.onload = (e) => {
        // console.log('onload e:',e)
        // let book = new ePub({
        //   bookPath: e.target.result
        // })
        const bookData = e.target.result
        this._book.open(bookData)

        console.log(this._book)
        this.rendition = this._book.renderTo("viewer", {
          width: "100%",
          height: 600
        });

        this.rendition.display();
      }
      reader.readAsArrayBuffer(targetFile);
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
        <div id="title"><input type="file" id="input" /></div>
          <div id="viewer" className="spreads"></div>
          <a id="prev" href="#prev" className="arrow">‹</a>
          <a id="next" href="#next" className="arrow">›</a>

      </div>
    )
  }
}