import React, { Component } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3001/book'

class Book extends Component{
    constructor(){
        super()
        this.state = {
            book: []
        }
    }
    componentWillMount(){
        const {id} = this.props.match.params
        axios.get(`${URL}/${id}`)
        .then((res) =>{
            console.log(res)
            this.setState({
                book: res.data
            })
        })
    }
    render(){
        return(
            <div>
                <h3>{this.state.book.title}</h3>
                <h5>{this.state.book.author}</h5>
                <p>{this.state.book.description}</p>
                <img src={this.state.book.image} alt="Book cover" />
            </div>
        )
    }
}

export default Book