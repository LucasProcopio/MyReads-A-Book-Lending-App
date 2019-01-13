import React from 'react'
import ShelfSelector from './ShelfSelector'
import PropTypes from 'prop-types'

const Book = (props) => (
	<div className="book">
	  <div className="book-top">
	    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.thumbnail})` }}></div>
	    <ShelfSelector book={props.book} bookShelf={props.book.shelf} callBack={props.callBack}/>
	  </div>
	  <div className="book-title">{props.book.title}</div>
	  <div className="book-authors">{props.book.authors.map( author => `${author}`)}</div>
	</div>
);

Book.propTypes = {
	book: PropTypes.object.isRequired,
	callBack: PropTypes.func.isRequired,
}

export default Book;