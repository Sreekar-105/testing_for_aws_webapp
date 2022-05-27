// Here we will use the route of the Express to simplify or job with similar routes

const express = require("express");

const app = express();

const port = process.env.port || 4444;

app.get("/",(req,res) => {
    // Handles the root request
    res.send("Hello Root");
})

app.route("/things/cars")
.get((req,res) =>{
    // handles the /things/cars
    res.send("Hello get /things/cars done using route");
})
.post((req,res) =>{
    // handles the /things/cars
    res.send("Hello post /things/cars done using route");
});

app.route("/things/cars/:carid")
.get((req,res) =>{
    // handles the /things/cars
    res.send("Hello get /things/cars"+req.params.carid + " done using route");
})
.post((req,res) =>{
    // handles the /things/cars
    res.send("Hello post /things/cars"+req.params.carid + " done using route");
});


app.listen(port, err =>{
    if(err){
        console.log("ERROR",err);
    }
    console.log(`Listening on the port ${port}`);
});