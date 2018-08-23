import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Search from './Search'
import Book from './Book'
import Books from './Books'
import './App.css'


class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <h1>Book Club</h1>
          <h2>The first rule of book club...</h2>
          <Link to='/search'><h3>Home</h3></Link>
          <Link to='/book'><h3>List</h3></Link>
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
