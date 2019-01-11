import React from 'react'
import ShelfSelector from './ShelfSelector'

const Book = (props) => (
	<div className="book">
	  <div className="book-top">
	    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.thumbnail})` }}></div>
	    	<ShelfSelector />
	  	</div>
	  <div className="book-title">{props.title}</div>
	  <div className="book-authors">{props.author.map( author => `${author}`)}</div>
	</div>
);


export default Book;