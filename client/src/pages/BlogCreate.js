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

  updateOrAdd = (e) => {
    if (this.props.update){
      this.props.update(e, this.state)
      return
    }
    this.submitHandler(e)
  }

  render(){
    return(
      <form onSubmit={this.updateOrAdd}>
        <label>
          Title:
          <input type="text" name="title" onChange={(e) => this.handleChange(e)}/>
        </label>
        <label>
          Content:
          <input type="text" name="content" onChange={(e) => this.handleChange(e)} />
        </label>
        <label>
          Author:
          <input type="text" name="author" onChange={(e) => this.handleChange(e)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default BlogCreate
