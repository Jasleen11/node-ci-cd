const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.post("/test", (req, res) => {
    
    res.json("Done");
})

app.listen(3000, () => {
    console.log("app listen at port 3000");
})
