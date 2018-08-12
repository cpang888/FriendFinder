/*
   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 
*/
// const bodyParser = require("body-parser");
// const path = require("path");
var path = require('path');

// exports.default = function(response) {
//     response.sendFile(path.join(__dirname, "../../app/public/home.html"));
// }

// exports.survey = function(response) {
//     response.sendFile(path.join(__dirname, "../../app/public/survey.html"));
// }

function htmlRoutes(app) {

    // A GET Route to /survey which should display the survey page.
    app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });
  
    // A default USE route that leads to home.html which displays the home page.
    app.use(function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
  
  }
  
  
  // Export for use in main server.js file
  module.exports = htmlRoutes;