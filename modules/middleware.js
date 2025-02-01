require("dotenv").config();
const jwt = require("jsonwebtoken");

function authenticateUser (req,res,next) {
    const token  = req.headers.jwt;
    const client_secret = process.env.SECRET;

    console.log(jwt.decode(token,client_secret));

    const {userName,password} = jwt.decode(token,client_secret);

    try{
        jwt.verify(token,client_secret);
    }catch(err){
        res.status(401);
        res.json({statusCode:401,status:"Unauthorised",message : "user not authorised to accese data"});
        res.end();
    }

    if(userName === "admin" && password ==="admin"){
        next();
    }else{
        res.status(401);
        res.json({statusCode:401,status:"Unauthorised",message : "user not authorised to accese data"});
        res.end();
    }


}
module.exports ={authenticateUser};