const mongoose = require("mongoose");
const express = require("express");


const categoryRouter = require("./routes/category-api.js");
// const eventRouter = require("./routes/event-api.js");

const app = express();
app.listen(8080);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('images'));
app.use(express.static('views'));
app.use(express.static('css'));
app.use(express.static("node_modules/bootstrap/dist/css"));
app.use(express.static('routes'));


app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
const url = "mongodb://localhost:27017/eventCategoryDb";

async function connect(url) {
	await mongoose.connect(url);
	return "Connected Successfully";
}

app.use("/api/v1/category", categoryRouter);
app.get('/', function (req, res) {
    res.render('index');
});



connect(url)
	.then(console.log)
	.catch((err) => console.log(err));

console.log("Server listening at : http://localhost:8080/");