import React, { Component } from 'react'
import axios from 'axios'

class BookFind extends Component{
    constructor(){
        super()
        // this.state = {
        //     book:[]
        // }
        this.state ={
            "title": "Adventures of Sherlock Holmes",
            "author": "Arthur Conan Doyle",
            "description": "The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle, featuring his fictional detective Sherlock Holmes",
            "image": "https://images-na.ssl-images-amazon.com/images/I/51AL2N%2BmmfL.jpg"
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/book')
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
                <h3>{this.state.title}</h3>
                <h5>{this.state.author}</h5>
                <p>{this.state.description}</p>
                <img src={this.state.image} alt="Book cover" />
            </div>
        )
    }
}

export default BookFind