import React from "react";
import BlogPreview from "../components/UI/blogpreview"

const Blogs = (props) => {
  const Preview = props.data.splice(0, 50).map( (blog) => {
    return (
      <BlogPreview author={blog.name} content={blog.body} key={blog.id} id={blog.id}/>
    )
  })
  return (
    <div className="container">
      <div className="row">
        {Preview}
      </div>
    </div>
  )
}

export default Blogs
