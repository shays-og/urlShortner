const express = require("express");
const app = express();

const dataBase = [{
    "longUrl": "https://aeon.co/essays/should-we-act-morally-towards-trees-empedocles-says-yes",
    "shortUrl": "aeonEssay"
}]

app.get("/", (req, res) => {
    res.redirect("https://www.youtube.com/")
})

app.get("/:shortHash", (req, res) => {
    const shortHash = req.params.shortHash;
    if(shortHash == dataBase[0].shortUrl){
        return res.redirect(dataBase[0].longUrl)
    }
    res.send(shortHash)
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})