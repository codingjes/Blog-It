import React from "react";
import { Link } from "react-router-dom";

const BlogPreview = (props) => (
    <div className="col-md-4 p-3">
      <Link to={"/blog/" + props.id}>
        <div className="card shadow h-100">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <p><i>{props.author}</i></p>
          </div>
        </div>
      </Link>
    </div>
)

export default BlogPreview
