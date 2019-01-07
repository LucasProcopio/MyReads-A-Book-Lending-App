import React from 'react';
import BookList from './BookList'

class BookShelf extends React.Component {

	render(){
		const { shelfName, shelfType } = this.props;
		return(
			<div>
		    <div className="bookshelf">
		      <h2 className="bookshelf-title">{shelfName}</h2>
		      <div className="bookshelf-books">
		      	<BookList shelf={ shelfType } />
		      </div>
		    </div>
    	</div>
		);
	}
}

export default BookShelf;