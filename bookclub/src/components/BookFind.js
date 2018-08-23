import React from 'react'

const BookFind = props => {
    let {books} = props
    
        return(
            <div>
                {books.map((book, i)=>
                <div className='book-find' key={i}>
                    <h3>{book.title}</h3>
                    <h5>{book.author}</h5>
                    <img src={book.image} alt='Book Cover' />
                </div>
                )}
            </div>
        )
}

export default BookFind