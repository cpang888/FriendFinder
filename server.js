const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

/*
Your `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.
*/
const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get("/", (request, response) => {
//     htmlRoutes.default(response);
// });

// app.get("/api/survey", (request, response) => {
//     htmlRoutes.survey(response);
// });

// app.get("/api/friends", (request, response) => {
//     return response.json(apiRoutes.friends());
// });

// app.post("/api/newFriend", (request, response) => {
//     let newFriend = request.body;
//     apiRoutes.addFriend(newFriend);
// });

apiRoutes(app); // API route
htmlRoutes(app); // HTML route

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});