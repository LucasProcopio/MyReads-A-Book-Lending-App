import React from 'react'
import { search } from '../BooksAPI'

class SearchForm extends React.Component {
	state = {
		value: '',
	}

	handleChange = event => {
		this.setState({value: event.target.value});
	}

	handleSearch = (query) => {
		if(query.length > 0){
			search(query).then( (books) => {
				this.props.callBack(books);
			});
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

export default SearchForm;