const express = require("express");
const app = express();

const config = require("./config")

const client = require("twilio")(config.accountSID, config.authToken)

// /login
//  phone number
// channel(sms/call)

// /verify
// phonenumber
// code}

app.get('/login', (req,res)=> {
    client
          .verify 
          .services(config.serviceID)
          .verifications
          .create({
              to: `+${req.query.phonenumber}`,
              channel: req.query.channel
          })
          .then((data) => {
              res.status(200).send(data)
          })
})

app.get('/verify', (req,res) => {
    client
         .verify
         .services(config.serviceID)
         .verificationChecks
         .create({
            to: `+${req.query.phonenumber}`,
            code: req.query.code
         }).then((data) => {
             res.status(200).send(data)
         })
})

app.listen(3000, function(req,res){
    console.log("server running on port 3000")
});


