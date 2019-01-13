import React from 'react'
import { search } from '../BooksAPI'

class SearchForm extends React.Component {
	state = {
		value: '',
	}

	handleChange = event => {
		this.setState({value: event.target.value});
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.value !== this.state.value){
			search(this.state.value).then( (books) => {
				if(this.state.value !== '')
					this.props.callBack(books);
			})
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