require("dotenv").config();
const express = require("express");

const {getBlogs,saveBlog} = require('./modules/blogDataHandler');
const { createBlog } = require("./modules/createBlog");
const { getBlogByID } = require("./modules/getBlogByID");
const { deleteBlogs } = require("./modules/deleteBlogs");
const { updateBlog } = require("./modules/updateBlog");
const { authenticateUser } = require("./modules/middleware");
 
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(authenticateUser);

app.get("/",(req,res)=>{
 res.status(200);
 res.json({statusCode:200,status:"OK",messgae : "welcome to Blogify"});
 res.end();
})

app.get("/getBlogs",(req,res)=>{
  const path = getBlogs();
  res.json(path);
  res.end();
});

app.post("/createBlog",createBlog);

app.get("/getBlogs/:id",getBlogByID);

app.delete("/deleteBlog/:id",deleteBlogs);

app.put("/updateBlog/:id",updateBlog);

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT} ... !!!!`);
})