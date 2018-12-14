import React, {Component} from "react";
import BlogForm from "../components/UI/blogForm"
import axios from "axios"

class BlogCreate extends Component{
  state = {
      title: null,
      content: null,
      author: null
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log("tried to submit", this.state)
    axios
      .post("http://localhost:5000/api/blogs", this.state)
      .then( (res) => {
        this.props.history.push("/blogs")
      })
      .catch( (err) => {console.log(err)})
  }

  handleChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
     });
  }

  render(){
    return(
      <BlogForm
        submit={this.submitHandler}
        change={this.handleChange}
      />
    )
  }
}

export default BlogCreate
