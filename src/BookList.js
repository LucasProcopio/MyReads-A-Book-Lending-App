import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css';


const shelfBookList = (bookList, shelf) => {
		return bookList.map( (books) => ( books.filter( (book) => (book.shelf === shelf) )));
}

const BookList = props => (
	<div>
		<ol className="books-grid">
			<ReactPlaceholder className="skeleton-placeholder"
				showLoadingAnimation type="text"
				ready={props.bookList.length > 0}
				rows={3} >
				{
					shelfBookList(props.bookList, props.shelf).map( (books) => ( books.map( (book) => (
						<li key={book.id}>
							<Book callBack={props.callBack} book={book}/>
						</li>
					))))
				}
	    </ReactPlaceholder>
		</ol>
	</div>
);

BookList.propTypes = {
	bookList: PropTypes.array.isRequired,
	shelf: PropTypes.string.isRequired,
	callBack: PropTypes.func.isRequired,
}

export default BookList;