import React from 'react'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'

class ShelfSelector extends React.PureComponent {
	state = {
		shelf: this.props.bookShelf,
	}

	/**
	 * @description Handles select input change
	 */
  handleChange = event => {
  	this.setState({shelf: event.target.value});
  }

  componentDidUpdate(prevProps) {
  	if(prevProps.book.shelf !== this.state.shelf){
  		BooksAPI.update(this.props.book, this.state.shelf)
  		.then( () => {
  			this.props.callBack();
  		});
  	}
  }

	render(){
		return(
			<div className="book-shelf-changer">
			  <select value={this.state.shelf} onChange={this.handleChange}>
			    <option value="move" disabled>Move to...</option>
			    <option value="currentlyReading">Currently Reading</option>
			    <option value="wantToRead">Want to Read</option>
			    <option value="read">Read</option>
			    <option value="none">None</option>
			  </select>
			</div>
		);
	}
}

ShelfSelector.propTypes = {
	book: PropTypes.object.isRequired,
	bookShelf: PropTypes.string,
	callBack: PropTypes.func.isRequired
}

export default ShelfSelector;