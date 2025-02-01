const {getBlogs,saveBlog} = require('./blogDataHandler');

function createBlog (req,res){
    const blogs = getBlogs();
  const newBlog = {
    id: blogs.length ? blogs[blogs.length - 1].id + 1 : 1,
    title: req.body.title,
    message: req.body.message 
  };
  blogs.push(newBlog);
  saveBlog(blogs);
  res.status(201).json({statusCode:201,status:"created",messgae : "Blog saved successfully"})
}

module.exports ={createBlog};