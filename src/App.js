import React from 'react'
import { Route, Link } from 'react-router-dom'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import './App.css'

class BooksApp extends React.Component {
  book = () => {
    console.log('Books', BooksAPI.getAll());
  }
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={ () => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
              <button onClick={this.book}>list-books</button>
            </div>
            <div className="list-books-content">
              <BookShelf shelfName="Currently Reading" shelfType="currentlyReading" />
              <BookShelf shelfName="Want to Read" shelfType="wantToRead" />
              <BookShelf shelfName="Read" shelfType="read" />
            </div>
            <div className="open-search">
              <Link className="open-search-link" to="/search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route extact path="/search" component={SearchPage}/>
      </div>
    )
  }
}

export default BooksApp
