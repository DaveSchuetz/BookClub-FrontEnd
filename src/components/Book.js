import React, { Component } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3001/book'

class Book extends Component{
    constructor(){
        super()
        this.state = {
            book: [],
            content: '',
            update:[],
            comments:[]
        }
    }
    componentDidMount(){
        const {id} = this.props.match.params
        axios.get(`${URL}/${id}`)
        .then((res) =>{
            this.setState({
                book: res.data,
                comments: res.data.comments
            })
        })
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value
        this.setState(state)
    }
    comChange = (e) => {
        const state = this.state.comments
        state[e.target.name].comment = e.target.value
        this.setState(state)
    }
    onSubmit = () =>{
        const {content} = this.state
        const {book} = this.state
        axios.post(`http://localhost:3001/comment`, {content,  book})
        .then((res) =>{
            this.setState({
                comments: res.data.comments
            })
        })
    }
    comDel(id){
        window.location.reload()
        axios.delete('http://localhost:3001/comment/'+ id)
    }
    comEdit(id, i){
        const {comment} = this.state.comments[i]
        axios.put('http://localhost:3001/comment/'+ id, {comment})
        .then((res) =>{
            this.setState({
                comments: res.data.comments
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
                {this.state.comments.map((comment, i)=>
                <div className='comment' key={i}>
                    <h3>{comment.comment}</h3>
                    <button type='submit' onClick={this.comDel.bind(this, comment._id)}>Delete</button>
                <form onSubmit={this.comEdit.bind(this, comment._id, i)}>
                    <input type='text' name={i} value={this.state.comments[i].comment} onChange={this.comChange} />
                    <button type='submit'>Update</button>
                </form>
                </div>
                )}
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='content' value={this.state.content} onChange={this.onChange} placeholder='Add Comment' />
                    <button type='submit'>Comment</button>
                </form>
            </div>
        )
    }
}

export default Book