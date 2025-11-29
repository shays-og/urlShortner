const express = require("express");
const app = express();

const data = "hello there, this an url shortner backend. I am developing this to self-learn many concepts through research and first principles. First thing which i am thinking of implementing is redirect functionality. So what i am gonna do that is i am going to read docs for redirecting to a website." 

app.get("/", (req, res) => {
    res.redirect("https://www.youtube.com/")
})

app.get("/:shortHash", (req, res) => {
    const shortHash = req.params.shortHash;

    res.send(data + shortHash)
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})