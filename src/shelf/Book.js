import React from 'react'
import ShelfSelector from './ShelfSelector'
import PropTypes from 'prop-types'

const bookImage = (book) => {
	return typeof book.imageLinks !== 'undefined' ?
	book.imageLinks.thumbnail : 'http://books.google.com/books/content?id=NLK2AAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api';
}

const bookAuthor = (book) => {
	return typeof book.authors !== 'undefined' ?
	book.authors : ['Unknown Author'];
}

const Book = (props) => (
	<div className="book">
	  <div className="book-top">
	    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookImage(props.book)})` }}></div>
	    <ShelfSelector book={props.book} bookShelf={props.book.shelf} callBack={props.callBack}/>
	  </div>
	  <div className="book-title">{props.book.title}</div>
	  <div className="book-authors">{bookAuthor(props.book).map( author => `${author}`)}</div>
	</div>
);

Book.propTypes = {
	book: PropTypes.object.isRequired,
	callBack: PropTypes.func,
}

export default Book;