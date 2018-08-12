/*
   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page. 
*/
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