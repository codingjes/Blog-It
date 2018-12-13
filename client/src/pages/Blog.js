import React, { Component } from "react";
import axios from "axios";

class Blog extends Component{
  state = {
    blog: {
      title: null,
      content: null,
      author: null,
      id: null
    }
  }

  componentDidMount () {
    const url = "http://localhost:5000/api/blog/" + this.props.match.params.id;
    axios.get(url)
      .then( response => {
        this.setState({
          blog: {
            title: response.data.title,
            content: response.data.content,
            author: response.data.author,
            id: response.data._id
          }
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div className="container">
        <h1>{this.state.blog.title}</h1>
        <p>{this.state.blog.content}</p>
      </div>
    )
  }
}

export default Blog
