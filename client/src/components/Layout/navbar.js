import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light  mb-3">
    <Link className="navbar-brand" to="/">Blog It</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/blogs/">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog/create">Create Blog</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
