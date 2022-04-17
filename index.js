const express = require('express');
const axios = require('axios');
require('dotenv').config();
var candidate = require("./get_candidate.js");
var activity = require("./post_activity.js");

const port = 3000;
const app = express();
app.use(express.json({type: ['application/json']}));

app.post('/ringcall', async (req, res) => {

    const resourceUrl = req.body.resource_url;
    res.sendStatus(200).end();
    if(req.body.data.direction == "inbound") {  // Event when ringover receive a call
        candidate.getIdCandidate(req.body.data.from_number)
        .then(result => {
            activity.postActivity({id:result.id,activity:"call_talked"})  // Add event to CATS
            .then(result => {
                console.log(result);
            });
        });
    }
})
app.get('/ringcall', async (req, res) => {

    const resourceUrl = req.body.resource_url;
    console.log("no way");
    res.json({error:"No way"}).end();
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })