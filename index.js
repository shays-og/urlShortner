const express = require("express");
const shorturl = require("./src/short-hash");
const app = express();

app.use(express.json())

const dataBase = [{
    "longUrl": "https://aeon.co/essays/should-we-act-morally-towards-trees-empedocles-says-yes",
    "shortUrl": "aeonEssay"
}]
const shotrl = shorturl();
console.log(shotrl)
app.post("/", (req, res) => {
    const longlUrl = req.body.longUrl; 
    dataBase.push({
        "longUrl": longlUrl,
        "shortUrl": shorturl()
    })
    console.log(dataBase)
    res.json(dataBase)
})

app.get("/:shortHash", (req, res) => {
    const shortHash = req.params.shortHash;
    for (let i = 0; i < dataBase.length; i++){
        if(shortHash == dataBase[i].shortUrl){
            return res.redirect(dataBase[i].longUrl)
        }
    }
    res.send(shortHash)
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})