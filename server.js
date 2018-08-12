const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const friends = require('./app/data/friends');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "app/public/home.html"));
});


app.get("/api/survey", (request, response) => {
    response.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.post("/api/newFriend", (request, response) => {
    // response.sendFile(path.join(__dirname, "app/public/survey.html"));
    let newFriend = request.body;
    friends.addFriend(newFriend);
});

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});