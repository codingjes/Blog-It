const express = require("express")
const router = express.Router();
// get blogs model
const Blog = require("../../models/blogs");

// route:  GET api/blogs
// desc: returns all the blogs as json
// access: public
router.get("/blogs", (req, res) => {
    Blog
      .find()
      .then( blogs => res.json(blogs))
      .catch(err => console.log(err));
})

// route:  Post api/blogs
// desc: adds a blog
// access: public
router.post("/blogs", (req, res) => {
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

// route GET api/blog:id
// desc: gets a single blog from the database
//
router.get("/blog/:id", (req, res) => {
  Blog
    .findById(req.params.id)
    .then( blog => {
      if(!blog) {
        return res.status(500).send("There was a problem finding the user.");
      }
      res.json(blog)
    })
    .catch( err => console.log(err))
});

// DELETES A USER FROM THE DATABASE
router.delete("/blog/:id", (req, res) => {
    Blog
      .findByIdAndRemove(req.params.id)
      .then( deletedBlog => {
        res.json(deletedBlog)
      })
      .catch( err => {
        res.status(500).send("there was a problem deleting the blog")
      })
});

// UPDATES A SINGLE BLOG IN THE DATABASE
router.put('/blog/:id', (req, res, next) => {
  const updatedBlog = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  }

  Blog.findOneAndUpdate({_id: req.params.id}, {$set : updatedBlog}, { new : true},
     (err, data) => {
      if(data) {
        res.json(data)
      }else{
        console.log("there was an error")
      }
    })
});


module.exports = router
