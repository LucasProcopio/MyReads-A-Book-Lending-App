import React from 'react'
import BookList from '../shelf/BookList'

class SearchBooksResults extends React.Component {

	render() {
		return(
			<div className="search-books-results">
				<BookList bookList={this.props.bookList} />
			</div>
		);
	}
}

export default SearchBooksResults;