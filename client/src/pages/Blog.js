import React, { Component } from "react";
// import axios from "axios";

class Blog extends Component{
  state = {
    blog: {
      title: test,
      content: test,
      id: test
    }
  }

  // componentDidMount () {
  //   const url = "https://jsonplaceholder.typicode.com/comments/" + this.props.match.params.id;
  //   axios.get(url)
  //     .then( response => {
  //       this.setState({
  //         blog: {
  //           title: response.data.name,
  //           content: response.data.body,
  //           id: response.data.id
  //         }
  //       })
  //     })
  // }

  render(){
    console.log(this.state)
    return(
      <div className="container">
        <h1>{this.state.blog.title}</h1>
        <p>{this.state.blog.content}</p>
      </div>
    )
  }
}

export default Blog
