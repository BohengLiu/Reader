import React,{Component } from 'react'
import {Book} from 'epubjs'

export class Shelf extends Component{
  
  logfile(e) {
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
        let book = new Book({
          bookPath: e.target.result
        })
        console.log(book)
        
          // var key = new Date().getTime() + '',
          //     name = metadata.bookTitle,
          //     author = metadata.creator,
          //     article = new Book(key, name, author, e.target.result);

          // console.log(metadata);
          // addBookToPage(article);
          // bookDB.open(function () {
          //     bookDB.addBook(
          //         article,
          //         function () {
          //             console.log('add book successfully!');
          //         },
          //         function () {
          //             console.log('some error occured!');
          //         }
          //     );
          // });
      // });

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