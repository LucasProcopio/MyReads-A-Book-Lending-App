import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookList extends React.Component {

  /**
   * @description Handles Shelf book list placement
   * @param {object} bookList 
   * @param {string} shelf the book shelf
   */
	shelfBookList = (bookList, shelf) => {
		if(typeof shelf !== 'undefined')
			return bookList.filter( (book) => ( book.shelf === shelf ));
    
    	return bookList;
	}

	render(){
		const {bookList, shelf, callBack} = this.props;
		return(
			<div>
				<ol className="books-grid">
					{
					this.shelfBookList(bookList, shelf).map( (book) => (
						<li key={book.id}>
							<Book callBack={callBack} book={book}/>
						</li>
					))
					}
				</ol>
			</div>
		);
	}
}


BookList.propTypes = {
	bookList: PropTypes.array.isRequired,
	shelf: PropTypes.string,
	callBack: PropTypes.func.isRequired,
}

export default BookList;