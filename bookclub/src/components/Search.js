import React, { Component } from 'react'
import axios from 'axios'
import BookFind from './BookFind'
import {Redirect} from 'react-router-dom'
const URL = 'http://localhost:3001/book'

class Search extends Component{
    constructor(){
        super()
        this.state = {
            query:'',
            data: [],
            books:[],
            random: null
        }
    }
    componentDidMount(){
        axios.get(`${URL}`)
        .then((res) =>{
            console.log(res)
            this.setState({
                data: res.data
            })
        })
    }
    
      randBook() {
        const keys = Object.keys(this.state.data)
        let i = keys.length - 1
        const j = Math.floor(Math.random() * i)
        console.log(this.state.data[keys[j]])
        this.setState({
          random: this.state.data[keys[j]]
        })
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
        if (this.state.random !== null){
            return <Redirect to={{pathname: '/book/'+ this.state.random._id, state: {id: this.state.random._id}}} />
          }
        return(
            <div>
                <button onClick={() => this.randBook()}>Random</button>
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
