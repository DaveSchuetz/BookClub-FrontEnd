import React, { Component } from 'react'
import axios from 'axios'
import BookFind from './BookFind'

class Search extends Component{
    constructor(){
        super()
        this.state = {
            query:'',
            books:[]
        }
    }
    getBooks = () => {
        axios.get('http://localhost:3001/search')
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
                <form>
                    <input type='text' name='search' placeholder='Search' />
                    <button type='button'>Search</button>
                </form>
                <BookFind books={this.state.books} />
            </div>
        )
    }
}

export default Search
