import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Search from './Search'
import Book from './Book'
import Books from './Books'
import axios from 'axios'
import './App.css'
const URL = 'http://localhost:3001/book'

class App extends Component {
  constructor(){
    super()
    this.state = {
        books: [],
        random: null
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
  randBook() {
    const keys = Object.keys(this.state.books)
    let i = keys.length - 1
    const j = Math.floor(Math.random() * i)
    console.log(this.state.books[keys[j]])
    this.setState({
      random: this.state.books[keys[j]]
    })
  }
  render() {
    return (
      <div>
        <nav>
          <h1>Book Club</h1>
          <h2>The first rule of book club...</h2>
          <Link to='/search'><h3>Search</h3></Link>
          <Link to='/book'><h3>List</h3></Link>
          <button onClick={() => this.randBook()}>Random</button>
          
        </nav>
        <main>
          <Switch>
            <Route path='/search' component={Search} />
            <Route path='/book/:id' component={Book} />
            <Route path='/book' component={Books} />
            <Route path='/*' render={() => <Redirect to='/search' />} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
