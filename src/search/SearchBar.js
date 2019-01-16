import React from 'react'
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const SearchBar = props => {
	return(
		<div className="search-books-bar">
			<Link className="close-search" to="/">Close</Link>
			<SearchForm callBack={props.callBack} />
		</div>
	);
}

SearchBar.propTypes = {
	callBack: PropTypes.func.isRequired
}

export default SearchBar;
