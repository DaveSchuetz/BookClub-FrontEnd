import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Search from './Search'
import Book from './Book'
import Books from './Books'
import './App.css'


class App extends Component {
  render() {
    return (
      <div class="bodyPic">
        <nav>
          <header>
            <p>Book Club</p>
            <p2>The first rule of book club...</p2>
            <Link to='/'><h3>Home</h3></Link>
          </header>

        </nav>
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
