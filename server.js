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

apiRoutes(app); // API route
htmlRoutes(app); // HTML route

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});