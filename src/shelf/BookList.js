import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import 'react-placeholder/lib/reactPlaceholder.css';


const shelfBookList = (bookList, shelf) => {
	return bookList.map( (books) => ( books.filter( (book) => (
		typeof shelf !== 'undefined' ? book.shelf === shelf : book ))));
}

const BookList = props => (
	<div>
		<ol className="books-grid">
				{
					shelfBookList(props.bookList, props.shelf).map( (books) => ( books.map( (book) => (
						<li key={book.id}>
							<Book callBack={props.callBack} book={book}/>
						</li>
					))))
				}
		</ol>
	</div>
);

BookList.propTypes = {
	bookList: PropTypes.array.isRequired,
	shelf: PropTypes.string,
	callBack: PropTypes.func,
}

export default BookList;