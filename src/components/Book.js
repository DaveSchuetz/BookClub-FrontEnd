import React, { Component } from 'react'
import axios from 'axios'
import './Book.css'

const URL = 'https://mern-bookclub.herokuapp.com/book'

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
        axios.post(`https://mern-bookclub.herokuapp.com/comment`, {content,  book})
        // .then((res) =>{
        //     this.setState({
        //         comments: res.data.comments
        //     })
        // })
    }
    comDel(id){
        window.location.reload()
        axios.delete('https://mern-bookclub.herokuapp.com/comment/'+ id)
    }
    comEdit(id, i){
        const {comment} = this.state.comments[i]
        axios.put('https://mern-bookclub.herokuapp.com/comment/'+ id, {comment})
        // .then((res) =>{
        //     this.setState({
        //         comments: res.data.comments
        //     })
        // })
    }
    showEdit(i){
        const commVis = document.getElementById(`comm${i}`)
        commVis.style.display = 'none'
        console.log(commVis)
        const btnVis = document.getElementById(`showBtn${i}`)
        btnVis.style.display = 'none'
        console.log(btnVis)
        const formHid = document.getElementById(`showForm${i}`)
        formHid.style.display = 'block'
        console.log(formHid)
    }
    render(){
        return(
            <div>
                <div className="grid-container">
                    <h3>{this.state.book.title}</h3>
                    <h5>{this.state.book.author}</h5>
                    <p>{this.state.book.description}</p>
                    <img src={this.state.book.image} alt="Book cover" />
                    
                        <form onSubmit={this.onSubmit}>
                            <input size="50" type='text' name='content' value={this.state.content} onChange={this.onChange} placeholder='Add Comment' />
                            <button className="newComm" type='submit'>Comment</button>
                        </form>
                        {this.state.comments.map((comment, i)=>
                        <div className='commentBox' key={i}>
                            <p className='comment' id={'comm'+i}>{comment.comment}</p>
                        <button className="del" type='submit' onClick={this.comDel.bind(this, comment._id)}>X</button>
                        <button className="showEdit" id={'showBtn' + i} type='submit' onClick={this.showEdit.bind(this, i)}>Update</button>
                        <form id={'showForm' + i} className="update" onSubmit={this.comEdit.bind(this, comment._id, i)}>
                            <input size='35' type='text' name={i} value={this.state.comments[i].comment} onChange={this.comChange} />
                            <button className="updBtn" type='submit'>Update</button>
                        </form>
                        
                        </div>
                        )}
                    
                </div>
            </div>
        )
    }
}

export default Book