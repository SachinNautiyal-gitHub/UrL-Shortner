
const express = require('express');
const shortid = require('shortid');
const URL = require('../models/Url');

const router = express.Router();

router.post('/', async(req, res)=>{
    const body = req.body;
    if(!body.url) return res.status(400).json({error : "Url is Required"})
    const shortID = shortid(8);
    
    await URL.create({
        shortId : shortID,
        RedirectUrl: body.url,
        visitHistory:[],
    });

    return res.json({id:shortID})

})


module.exports = router;