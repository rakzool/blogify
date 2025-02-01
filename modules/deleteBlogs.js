const { getBlogs, saveBlog } = require('./blogDataHandler');


function deleteBlogs(req, res) {
    let blogs = getBlogs();
    const newBlog = blogs.filter(blog => blog.id !== parseInt(req.params.id));
    if (blogs.length === newBlog.length) {
         res.status(404);
         res.json({ statusCode: 404, status: "NOT FOUND", message: "no blog with this id exists" });
         res.end();
      }
    saveBlog(newBlog);
    res.status(204);
    res.json({ statusCode: 204, status: "DELETED", messgae: "Blog Deleted Succesfully" });
    res.end();
}

module.exports = { deleteBlogs };