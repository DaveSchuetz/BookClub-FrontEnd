import React, { Component } from 'react'
import axios from 'axios'
import './Book.css'

const URL = 'http://localhost:3001/book'

class Book extends Component {
    constructor() {
        super()
        this.state = {
            book: []
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params
        axios.get(`${URL}/${id}`)
            .then((res) => {
                console.log(res)
                this.setState({
                    book: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <div class="grid-container">
                    <h3>{this.state.book.title}</h3>
                    <h4>{this.state.book.author}</h4>
                    <h5>{this.state.book.description}</h5>
                    <img src={this.state.book.image} alt="Book cover" />
                </div>
            </div>
        )
    }
}

export default Book