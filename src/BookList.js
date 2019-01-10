import React from 'react'
import ShelfBookList from './ShelfBookList'

class BookList extends React.Component {

	render(){
		const { shelf } = this.props;
		return(
			<div>
					<ShelfBookList shelf={shelf}/>
    	</div>
		);
	}
}

export default BookList;