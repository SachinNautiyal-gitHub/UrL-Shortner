
const express = require('express');
const connectToMongo = require("./DB");
const app = express();
const URL = require("./models/Url");
const cors = require('cors');
const PORT = process.env.PORT || 5000 ;
const url = "https://urlshortner-backend-cars.onrender.com";
const urlRoute = require('./routes/url');

app.use(express.json());
app.use(cors());

connectToMongo();

app.use(url, urlRoute);

app.get(`${url}/:shortId`, async(req, res)=>{
   const shortId = req.params.shortId;
   const entry = await URL.findOneAndUpdate({
          shortId
   }, {
      $push:{
         visitHistory: {
            timeStamp:Date.now(),
         },
      },
   });
     
    try {
       res.redirect(entry.RedirectUrl);
    } catch(error) {
      
      res.status(401).send("Enter a valid url");
    }
})


app.listen(PORT, (req, res)=>{
    console.log("server listning at port 5000");
})

