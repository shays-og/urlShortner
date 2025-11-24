const express = require("express");
const app = express();

const data = "hello there, this an url shortner backend. I am developing this to self-learn many concepts through research and first principles." 
app.get("/", (req, res) => {
    res.send(data)
})


app.listen(3000, () => {
    console.log("Listening to port 3000")
})