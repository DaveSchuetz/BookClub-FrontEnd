import React, { Component } from 'react'

class Search extends Component{
    searchBooks(){

    }
    render(){
        return(
            <div>
                <form>
                    <input type='text' name='search' placeholder='Search' />
                    <button type='button' onClick="searchBooks()">Search</button>
                </form>
                <BookFind search />
            </div>
        )
    }
}

export default Search
