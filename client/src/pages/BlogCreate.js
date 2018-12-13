import React, {Component} from "react";
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
      .then((res) => console.log(res))
      .catch( (err) => {console.log(err)})
    this.props.history.push("/blogs")
  }

  handleChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
     });
  }

  render(){
    return(
      <form onSubmit={this.submitHandler}>
        <label>
          Title:
          <input type="text" name="title" onChange={this.handleChange}/>
        </label>
        <label>
          Content:
          <input type="text" name="content" onChange={this.handleChange} />
        </label>
        <label>
          Author:
          <input type="text" name="author" onChange={this.handleChange}/>
        </label>
          <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default BlogCreate
