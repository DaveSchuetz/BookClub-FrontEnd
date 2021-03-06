import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Search from './Search'
import Book from './Book'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="bodyPic">
      <header>
        <nav>
          <h1>Book Club</h1>
          <h2>The first rule of book club...</h2>
        </nav>
        <Link to='/'><p>Home</p></Link>
      </header>
        <main>
          <Switch>
            <Route path='/search' component={Search} />
            <Route path='/book/:id' component={Book} />
            <Route path='/*' render={() => <Redirect to='/search' />} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
