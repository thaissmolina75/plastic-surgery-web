const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", function (req,res) {
    res.sendFile(__dirname + "/public/routing/landingPage.html")
})

app.get("/landingPage.html", function (req,res) {
    res.sendFile(__dirname + "/public/routing/landingPage.html")
})

app.get("/aboutPage.html", function (req,res) {
    res.sendFile(__dirname + "/public/routing/aboutPage.html")
})

app.listen(3000, function (req,res) {
    console.log("Server is listening on port 3000")
})