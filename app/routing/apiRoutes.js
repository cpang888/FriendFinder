/*
   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
*/
// const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const friends = require('../../app/data/friends');
// const app = express();

exports.addFriend = function(newFriend) {
    friends.addFriend(newFriend);
}

exports.friends = function() {
    let friendsArr = friends.getAll();
    console.log(friendsArr);
    return friendsArr;
}

// app.get("/api/friends", (request, response) => {
//     let friendsArr = friends.getAll();
//     return response.json(friendsArr);
// });

// app.post("/api/newFriend", (request, response) => {
//     // response.sendFile(path.join(__dirname, "app/public/survey.html"));
//     let newFriend = request.body;
//     friends.addFriend(newFriend);
// });