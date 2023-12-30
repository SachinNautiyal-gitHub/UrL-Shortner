
const express = require('express');
const connectToMongo = require("./DB");
const app = express();


connectToMongo();



app.listen(5000, (req, res)=>{
    console.log("server listning at port 5000");
})

