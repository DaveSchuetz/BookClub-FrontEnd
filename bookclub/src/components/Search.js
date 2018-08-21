import React, { Component } from 'react'

class Search extends Component{
    render(){
        return(
            <div>
                <form>
                    <input type='text'name='search' placeholder='Search' />
                    <button type='button'>Search</button>
                </form>
            </div>
        )
    }
}

export default Search
