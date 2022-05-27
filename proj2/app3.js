// Code using the express router  to make our wor easy with the similar routes 

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Very very important for css rendering in the webpage
// serve your css as static
app.use(express.static(__dirname));

const port = process.env.port || 4444;

const things = require("./routes/things");

app.use("/things",things);
// use things.js file to handle
// endpoints that starts with /things

app.get("/",(req,res) => {
    // Handles the root request
    // var data = fs.readFile("./proj2/index.html",()=>{
    //     console.log("error reading file");
    // });
    res.sendFile(path.join(__dirname,'/index.html'));
});



app.listen(port, err =>{
    if(err){
        console.log("ERROR",err);
    }
    console.log(`Listening on the port ${port}`);
});