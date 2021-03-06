import React from 'react'
import { Route, Link } from 'react-router-dom'
import SearchPage from './search/SearchPage'
import BookShelf from './shelf/BookShelf'
import { getAll } from './BooksAPI'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

class BooksApp extends React.Component{

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
    getAll().then( (books) => {
      this.setState({bookList: books });
      toast.success('The book list has been successfully updated');
    });
  }

  render() {
    return (
      <div className="app">
        <ToastContainer position="top-right" autoClose={2500} />
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
        <Route extact path="/search" render={(props) => (
          <SearchPage callBack={this.updateBookShelf} myBookList={this.state.bookList}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
