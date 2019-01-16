import React from 'react'
import { search } from '../BooksAPI'
import PropTypes from 'prop-types'

class SearchForm extends React.Component {
	state = {
		value: '',
	}

	handleChange = event => {
		this.setState({value: event.target.value});
	}

	/**
	 * @description Handles search input field values to display 
	 * correct data in the search page
	 * 
	 * @param {string} query input field value
	 */
	handleSearch = (query) => {
		if(query.trim() !== ''){
			search(query).then( (books) => {
				this.props.callBack(books);
			});
		} else {
			this.props.callBack([]);
		}
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.value !== this.state.value){
			this.handleSearch(this.state.value);
		}
	}

	render(){
		return(
			<div className="search-books-input-wrapper">
					<input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search by title or author"/>
			</div>
		);
	}
}

SearchForm.propTypes = {
	callBack: PropTypes.func.isRequired
}

export default SearchForm;