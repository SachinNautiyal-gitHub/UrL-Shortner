
const express = require('express');
const connectToMongo = require("./DB");
const app = express();
const URL = require("./models/Url");
const cors = require('cors');

const urlRoute = require('./routes/url');

app.use(express.json());
app.use(cors());

connectToMongo();

app.use('/url', urlRoute);

app.get('/:shortId', async(req, res)=>{
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

   res.redirect(entry.RedirectUrl);
})


app.listen(5000, (req, res)=>{
    console.log("server listning at port 5000");
})

