/*
   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 
*/
var path = require('path');

function htmlRoutes(app) {

    // A GET Route to /survey which should display the survey page.
    app.get('/survey', function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/survey.html'));
      // res.sendFile(path.join(__dirname + '../public/survey.html'));
    });
  
    // A default USE route that leads to home.html which displays the home page.
    app.use(function (req, res) {
      res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
  
  }
    
  // Export for use in main server.js file
  module.exports = htmlRoutes;