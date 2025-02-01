const {getBlogs} = require('./blogDataHandler');

function getBlogByID (req,res) {
    const blogs = getBlogs();
    const item = blogs.find((blog)=> blog.id === parseInt(req.params.id));
    if(!item){
     console.log(JSON.stringify(item));
     res.status(404).json({statusCode:404,status:"NOT FOUND",messgae : "no blog with this id exists"});
     res.end();
    }else{
     console.log(JSON.stringify(item));
     res.status(200).json(item);
     res.end();
    }
}

module.exports ={getBlogByID};