import React from 'react'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'

const SearchBar = props => {
	return(
		<div className="search-books-bar">
			<Link className="close-search" to="/">Close</Link>
			<SearchForm callBack={props.callBack} />
		</div>
	);
}

export default SearchBar;
