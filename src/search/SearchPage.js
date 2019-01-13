import React from 'react'
import SearchBar from './SearchBar'
import SearchBookResults from './SearchBookResults'

class SearchPage extends React.Component {

  state = {
    bookList: []
  }

  updateBookList = (books) => {
    this.setState({bookList: [books]});
  }

	render(){
		return(
			<div className="search-books">
        <SearchBar callBack={this.updateBookList} />
        <SearchBookResults bookList={this.state.bookList} />
      </div>
		);
	}
}

export default SearchPage;