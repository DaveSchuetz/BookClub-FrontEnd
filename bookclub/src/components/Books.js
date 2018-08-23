import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const URL = 'http://localhost:3001/book'

class Book extends Component{
    constructor(){
        super()
        this.state = {
            books: []
        }
    }
    componentDidMount(){
        axios.get(`${URL}`)
        .then((res) =>{
            console.log(res)
            this.setState({
                books: res.data
            })
        })
    }
    render(){
        return(
            <div>
                {this.state.books.map((book, i)=>
                <div className='book-find' key={i}>
                <Link to={{pathname: '/book/'+ book._id, state: {id: book._id}}}>
                    <h3>{book.title}</h3>
                    <h5>{book.author}</h5>
                    <img src={book.image} alt={book.title} />
                </Link>
                </div>
                )}
            </div>
        )
    }
}

export default Book