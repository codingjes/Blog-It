import React, {Component} from "react";
import axios from "axios"
import BlogPreview from "../components/UI/blogpreview";


class Blogs extends Component {
 state = {
   blogs: [],
 }

 componentDidMount() {
   axios.get("http://localhost:5000/api/blogs")
    .then( res => {
      this.setState({
        blogs: res.data
      })
    })
    .catch( err => {
      console.log(err)
    })
 }

  render() {
    let blogs = this.state.blogs.map( blog => (
      <BlogPreview
        id={blog._id}
        author={blog.author}
        content={blog.content}
        title={blog.title}
        key={blog._id}
      />
    ))
    return (
      <div className="container">
        <div className="row">
          {blogs}
        </div>
      </div>
    )
  }
}

export default Blogs
