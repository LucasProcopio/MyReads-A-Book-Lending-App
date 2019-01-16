import React from 'react'
import SearchBar from './SearchBar'
import SearchBookResults from './SearchBookResults'
import PropTypes from 'prop-types'

class SearchPage extends React.Component {
	
	state = {
		bookList: [],
	}

	/**
	 *  @description Checks if a book is found
	 *  @param {object} books list of books found by the search input field
	 *  @returns boolean
	 */
	validateBookList = books => {
		if(typeof books === 'undefined' || typeof books.error !== 'undefined'){
			this.setState({bookList: []});
			return false;
		} else {
			return true;
		}
	}

	/**
	 * @description Set a shelf value to a book found by the search input field
	 * @param {object} bookFound a book found by the search input field
	 */
	setBookShelf = bookFound => {
		this.props.myBookList.map( 
			book => bookFound.id === book.id ? bookFound.shelf = book.shelf : false 
		);
		if (typeof bookFound.shelf === 'undefined') bookFound.shelf = 'none';
	}

	/**
	 * @description Update bookList
	 * @param {object} books list of books found by the search input field
	 */
	updateBookList = books => {
		if(this.validateBookList(books)){
			books.map( book => this.setBookShelf(book));
			this.setState({bookList: books})
		}
	}
	
	render(){
		return(
			<div className="search-books">
				<SearchBar callBack={this.updateBookList} />
				<SearchBookResults callBack={this.props.callBack} bookList={this.state.bookList} />
			</div>
		);
	}
}

SearchPage.propTypes = {
	callBack: PropTypes.func.isRequired,
	myBookList: PropTypes.array.isRequired
}

export default SearchPage;