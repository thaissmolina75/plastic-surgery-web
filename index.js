const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + "/public"));

app.get("/", function (req,res) {
    res.sendFile(__dirname + "/public/routing/landingPage.html")
})

app.get("/landingPage.html", function (req,res) {
    res.sendFile(__dirname + "/public/routing/landingPage.html")
})

app.listen(PORT, function (req,res) {
    console.log(`Server is listening on port ${PORT}`)
})