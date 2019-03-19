import React,{ Component } from 'react'
import ePub from 'epubjs'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import './bookStyle.css'

@observer
export class Book extends Component{
  @observable
  toc = []
  @observable
  cover = ''

  constructor() {
    super()
    this._book = ePub()
    this.rendition = {next:()=>{},prev:()=>{}}
    // this.toc = []
  }
  
  logfile = e => {
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
      this.loadToc()
      this.loadMetaData()
      // console.log('cover',this._book.conver)
     
    } else {
      alert('Your browser does not support the required features. Please use a modern browser such as Google Chrome, or Mozilla Firefox')
    }
  }

  loadToc = () => {
    this._book.loaded.navigation.then( toc => {
			// var $select = document.getElementById("toc"),
			// 		docfrag = document.createDocumentFragment();

      this.toc = toc.toc
      console.log(this.toc)
			// 	var option = document.createElement("option");
			// 	option.textContent = chapter.label;
			// 	option.ref = chapter.href;

			// 	docfrag.appendChild(option);
			// });

			// $select.appendChild(docfrag);

			// $select.onchange = function(){
			// 		var index = $select.selectedIndex,
			// 				url = $select.options[index].ref;
			// 		rendition.display(url);
			// 		return false;
      // };
      console.log(toc)
		});
  }

  loadMetaData = () => {
    this._book.loaded.metadata.then((meta)=>{
      console.log('meta',meta)
      // var $title = document.getElementById("title");
      // var $author = document.getElementById("author");
      // var $cover = document.getElementById("cover");
      // var $nav = document.getElementById('navigation');
      if (this._book.archived) {
        this._book.archive.createUrl(this._book.cover)
          .then( url => {
            console.log('cover',url)
            this.cover = url
          })
      } else {
        console.log('cover',this._book.cover);
      }
      // console.log(this._book.archive)
      // $title.textContent = meta.title;
      // $author.textContent = meta.creator;
      

      // if ($nav.offsetHeight + 60 < window.innerHeight) {
      //   $nav.classList.add("fixed");
      // }

    });
  }
  
  next = (e) => {
    this.rendition.next()
    e.preventDefault()
  }

  prev = (e) => {
    this.rendition.prev()
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <div className="sidebar">
        <img src={this.cover} />
        <ul>{this.toc.map(chapter=>{
          return (<li>{chapter.label}</li>)
        })}</ul>
        </div>
        <h1>Book Shelf</h1>
        <input id="file" type='file' onChange={this.logfile} />
          <a id="prev" href="#prev" onClick={this.prev} className="arrow">‹</a>
          <a id="next" href="#next" onClick={this.next} className="arrow">›</a>
          <div id="viewer" className="spreads"></div>
      </div>
    )
  }
}