// routes/things.js routing file

const express = require("express");

let router = express.Router();


router.use(function(req,res,next){
    console.log(req.url + "@" +Date.now());
    next();
});

router
.route("/cars")
.get((req,res) =>{
    // handles the /things/cars
    res.send("Hello get /things/cars done using router");
})
.post((req,res) =>{
    // handles the /things/cars
    res.send("Hello post /things/cars done using router");
});

router
.route("/cars/:carid")
.get((req,res) =>{
    // handles the /things/cars
    res.send("Hello get /things/cars"+req.params.carid +" done using router");
})
.post((req,res) =>{
    // handles the /things/cars
    res.send("Hello post /things/cars"+req.params.carid + " done using router");
});

module.exports = router;