import React from 'react'
import BookList from '../shelf/BookList'
import PropTypes from 'prop-types'
class SearchBooksResults extends React.Component {

	render() {
		return(
			<div className="search-books-results">
				<BookList callBack={this.props.callBack} bookList={this.props.bookList} />
			</div>
		);
	}
}

SearchBooksResults.propTypes = {
	callBack: PropTypes.func.isRequired,
	bookList: PropTypes.array.isRequired
}

export default SearchBooksResults;