require("dotenv").config();
const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname,"../resources",process.env.SOURCE);
const getBlogs = () =>{
         try{
            let blogs = fs.readFileSync(dataPath,'utf-8');
         return JSON.parse(blogs);
         }catch(err){
            console.error(err);
            return[];
         }
   
}

const saveBlog = (blogs) =>{
  fs.writeFileSync(dataPath,JSON.stringify(blogs,null,2),"utf-8");  
};

module.exports={getBlogs,saveBlog};