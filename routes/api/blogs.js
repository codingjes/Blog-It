const express = require("express")
const router = express.Router();
// get blogs model
const Blog = require("../../models/blogs");

// route:  GET api/blogs
// desc: returns all the blogs as json
// access: public
router.get("/", (req, res) => {
    Blog
      .find()
      .then( blogs => res.json(blogs))
      .catch(err => console.log(err));
})

// route:  Post api/blogs
// desc: adds a blog
// access: public
router.post("/", (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  })
  newBlog
    .save()
    .then( blog => res.json(blog))
    .catch( err => console.log(err))
});


module.exports = router
