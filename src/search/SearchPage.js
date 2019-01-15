import React from 'react'
import SearchBar from './SearchBar'
import SearchBookResults from './SearchBookResults'

class SearchPage extends React.Component {
	
	state = {
		bookList: [],
	}

	validateBookList = books => {
		if(typeof books === 'undefined' || typeof books.error !== 'undefined'){
			this.setState({bookList: []});
			return false;
		} else {
			return true;
		}
	}

	setBookShelf = (bookFound) => {
		this.props.myBookList.map( 
			bookList => bookList.map( book => bookFound.id === book.id ? bookFound.shelf = book.shelf : false 
		));
		if (typeof bookFound.shelf === 'undefined') bookFound.shelf = 'none';
	}

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
	
export default SearchPage;