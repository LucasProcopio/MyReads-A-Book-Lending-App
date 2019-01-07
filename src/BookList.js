import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookList extends React.Component {
	bookList = () => {
		BooksAPI.getAll();
	};

	render(){
		const { shelf } = this.props;
		return(
			<div>
				<ol className="books-grid">
		      <li>
		        <Book title="titulo" author="autor" thumbnail="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"/>
		      </li>
		      <li>
		        <Book title="titulo1" author="autor2" thumbnail="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"/>
		      </li>
	    	</ol>
    	</div>
		);
	}
}

export default BookList;