
const mongoose = require('mongoose');


const UrlSchema = new mongoose.Schema({
 
    shortId : {
         type : String,
         required : true,
         unique : true
    },

    RedirectUrl : {
        type : String,
        required : true
    },
    visitHistory :[{timeStamp : {type : Number}}],
},
{ timestamps : true}
);

const URL = mongoose.model('url', UrlSchema);
module.exports = URL;