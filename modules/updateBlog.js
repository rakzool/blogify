const { getBlogs, saveBlog } = require('./blogDataHandler');


function updateBlog(req, res) {
     let blogs = getBlogs();
     const index = blogs.findIndex(blog => blog.id === parseInt(req.params.id));
     if(index === -1 ){
        res.status(404);
         res.json({ statusCode: 404, status: "NOT FOUND", message: "no blog with this id exists" });
         res.end();
     }else{
        blogs[index] = {...blogs[index],...req.body};
        saveBlog(blogs);
        res.json(blogs[index]);
     }
}

module.exports = { updateBlog };