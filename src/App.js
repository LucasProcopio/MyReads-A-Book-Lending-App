import React from 'react'
import { Route, Link } from 'react-router-dom'
import SearchPage from './SearchPage'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
    bookList: [],
  }

  componentDidMount() {
    this.getBookShelfList();
  }

  updateBookShelf = () => {
    this.getBookShelfList();
  }

  getBookShelfList = () => {
    BooksAPI.getAll().then( (books) => {
      this.setState({bookList: [books] });
    });
  }

  render() {

    return (
      <div className="app">
        <Route exact path="/" render={ () => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf callBack={this.updateBookShelf} bookList={this.state.bookList} shelfName="Currently Reading" shelfType="currentlyReading" />
                <BookShelf callBack={this.updateBookShelf} bookList={this.state.bookList} shelfName="Want to Read" shelfType="wantToRead" />
                <BookShelf callBack={this.updateBookShelf} bookList={this.state.bookList} shelfName="Read" shelfType="read" />
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
