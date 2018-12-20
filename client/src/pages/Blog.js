import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import BlogCreate from "./BlogCreate"

class Blog extends Component{
  state = {
    blog: {
      title: null,
      content: null,
      author: null,
      id: null
    },
    updateForm: false,
  }

  componentDidMount () {
    const url = "http://localhost:5000/api/blog/" + this.props.match.params.id;
    axios.get(url).then( res => {
        this.setState({
          blog: { title: res.data.title,
                  content: res.data.content,
                  author: res.data.author,
                  id: res.data._id }
        })
      }).catch(err => console.log(err))
  }

  deleteHandler = () => {
    const url = "http://localhost:5000/api/blog/" + this.props.match.params.id
    axios.delete(url)
      .then( () => {this.props.history.push("/blogs")})
      .catch( err => console.log(err))
  }

  updateFormHandler = () => {
    this.state.updateForm ? this.setState({updateForm: false}) : this.setState({updateForm: true})
  }

  updateAction = (e, state) => {
  e.preventDefault()
  const url = "http://localhost:5000/api/blog/" + this.props.match.params.id
  axios.put(url,state)
    .then( () => {this.props.history.push("/blogs")})
    .catch(err => console.log(err))
  }

  render(){
    const Form = (
        <div className="container">
          <BlogCreate update={this.updateAction}/>
        </div>
    )
    return(
      <div className="container">
        <h1>{this.state.blog.title}</h1>
        <p>{this.state.blog.content}</p>
        <p>{this.state.blog.author}</p>
        <button onClick={this.deleteHandler}>Delete</button>
        <button onClick={this.updateFormHandler}>update</button>
        <button onClick={() => console.log(this.state)}>console.log the state</button>
        {this.state.updateForm ? Form : null}
      </div>
    )
  }
}

export default withRouter(Blog)
