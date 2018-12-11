const express = require("express");
const mongoose = require("mongoose");
const blogs = require("./routes/api/blogs");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// cors middleware
app.use(cors())

// Db Config
const db = require("./config/keys").mongoUri;

// connect to mongodb
mongoose
  .connect(db)
  .then( () => {console.log("mongodb connected")})
  .catch( (err) => {console.log(err)});


app.get("/", (req, res) => res.send("<h1>hello world</h1>"));

// Use routes
app.use("/api/blogs", blogs)

const port = 5000;

app.listen(port, () => console.log("app running"))
