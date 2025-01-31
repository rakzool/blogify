require('dotenv').config();

const express = require("express");

const app = express();

app.use(express.json());
const PORT = process.env.PORT;
const clientID = process.env.CLIENTID;
const hashkey = process.env.HASHKEY
 

 app.use(auth);

app.get('/',(req,res)=>{
  res.end("Hello world !!!");
  console.log(clientID,hashkey)
});

app.get('/about',(req,res)=>{
    res.status(200);
    res.send("<h1>Hello from about page</h1>");
    res.end();
  });

  app.post('/data',auth,(req,res)=>{
      console.log(req.body);
      res.end("data recived");
  })

  function auth (req,res,next) {
    const {name} = req.body;
    if(name === "rahul"){
        next();
    }
    else{
        res.status(401);
        res.end("message: un-authorised user");
    }
  }

app.listen(PORT,() => {
    console.log(`listening on express server on port ${PORT}`);
});