const express = require("express");

const app = express();

const port = process.env.port || 4444;

app.get("/",(req,res) => {
    // Handles the root request
    res.send("Hello Root");
})

app.get("/things/cars",(req,res) =>{
    // handles the /things/cars
    res.send("Hello get /things/cars");
})

app.post("/things/cars",(req,res) =>{
    // handles the /things/cars
    res.send("Hello post /things/cars");
})

app.get("/things/cars/:carid",(req,res) =>{
    // handles the /things/cars
    res.send("Hello get /things/cars"+req.params.carid);
})

app.post("/things/cars/:carid",(req,res) =>{
    // handles the /things/cars
    res.send("Hello post /things/cars"+req.params.carid);
})


app.listen(port, err =>{
    if(err){
        console.log("ERROR",err);
    }
    console.log(`Listening on the port ${port}`);
});