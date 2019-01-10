import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class ShelfBookList extends React.Component {

	state = {
		shelfBooks: [],
	}

	componentDidMount() {
		const bookList = BooksAPI.getAll();

		bookList.then( (books) => {
			const filterdBooks = books.filter( (book) => this.props.shelf === book.shelf);

			this.setState( (currentState) => ({
				shelfBooks: currentState.shelfBooks.concat([filterdBooks])
			}));
			console.log(this.state.shelfBooks);
		});

	}

	render(){
		return(
				<ol className="books-grid">
					{
						this.state.shelfBooks.map( (book, key) => (
							<li key={book[key].id}>
								<Book title={book[key].title} author="" thumbnail={book[key].imageLinks.thumbnail}/>
							</li>
						))
					}
				</ol>
		);
	}

}

export default ShelfBookList;