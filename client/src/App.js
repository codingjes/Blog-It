// third party librarys
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// layout
import Navbar from "./components/Layout/navbar"
import Footer from "./components/Layout/footer"

// pages -- containers
import Landing from "./pages/landing";
import Blogs from "./pages/Blogs";
import About from "./pages/about"
// dynamic route Component
import Blog from "./pages/Blog"

class App extends Component {
  state = {
    blogs: []
  }

  render() {
    return (
      <Router>
        <>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about/" component={About} />
            <Route path="/blogs/" component={Blogs} />
            <Route path="/blog/:id" component={Blog} />
          </Switch>
          <Footer/>
        </>
      </Router>
    );
  }
}

export default App;
