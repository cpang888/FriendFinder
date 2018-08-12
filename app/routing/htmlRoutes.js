/*
   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 
*/
const bodyParser = require("body-parser");
const path = require("path");

exports.default = function(response) {
    response.sendFile(path.join(__dirname, "../../app/public/home.html"));
}

exports.survey = function(response) {
    response.sendFile(path.join(__dirname, "../../app/public/survey.html"));
}
