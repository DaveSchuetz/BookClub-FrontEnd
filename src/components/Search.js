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
            this.setState({
                data: res.data
            })
        })
    }
    randBook() {
        const keys = Object.keys(this.state.data)
        let i = keys.length - 1
        const j = Math.floor(Math.random() * i)
        this.setState({
          random: this.state.data[keys[j]]
        })
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value
        this.setState(state)
    }
    onSubmit = (e) =>{
        e.preventDefault()
        const {query} = this.state
        axios.post(`${URL}/search`, {query})
        .then((res) =>{
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
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='query' value={this.state.query} onChange={this.onChange} placeholder='Search' />
                    <button type='submit'>Search</button>
                </form>
                <BookFind books={this.state.books} />
            </div>
        )
    }
}

export default Search
