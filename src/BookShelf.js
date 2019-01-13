import React from 'react';
import BookList from './BookList'
import PropTypes from 'prop-types'


const BookShelf = props => (
		<div>
		    <div className="bookshelf">
		      <h2 className="bookshelf-title">{props.shelfName}</h2>
		      <div className="bookshelf-books">
		      	<BookList callBack={props.callBack} bookList={props.bookList} shelf={props.shelfType} />
		      </div>
		    </div>
  	</div>
	);

BookShelf.propTypes = {
	shelfName: PropTypes.string.isRequired,
	shelfType: PropTypes.string.isRequired,
	bookList: PropTypes.array.isRequired,
	callBack: PropTypes.func.isRequired
}

export default BookShelf;