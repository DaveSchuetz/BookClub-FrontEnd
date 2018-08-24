import React from 'react'
import { Link } from 'react-router-dom'
import './BookFind.css'

const BookFind = props => {
    let {books} = props
    
        return(
            <div>
                <div class="result">
                    {books.map((book, i)=>
                    <div className='book-find' key={i}>
                    <Link to={{pathname: '/book/'+ book._id, state: {id: book._id}}}>
                        <h3>{book.title}</h3>
                        <h5>{book.author}</h5>
                        <img src={book.image} alt='Book Cover' />
                    </Link>
                    </div>
                    )}
                </div>
            </div>
        )
}

export default BookFind