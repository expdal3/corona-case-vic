//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const PORT = process.env.PORT || 3000;
const homeStartingContent = "DATA SOURCE: Department of Health and Human Services";
const aboutContent = "My name is Duc Anh Le (Andre). I am an aspired data-scientist and web developer. I am skilled in Python, R, Power BI,  I build this page using node.js, express   ";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// lo - dash setup
const _ = require('lodash');
const dashify = require('dashify');

let posts = [];
let trunclen = 100;

//+-----------------------------------------------+
//|    HOME PAGE, ABOUT AND CONTACT PAGE ROUTE 
//+-----------------------------------------------+

app.get("/", function(req, res) {
    // res.send("Hello babe")
    // var title = $("h1").text
    res.render("home", {
        HomeEJScontent: homeStartingContent
    });

});


// ============= ABOUT PAGE ======================
app.get("/contact", function(req, res) {
    res.render("contact", { contactEJScontent: contactContent });
});

// ============= ABOUT PAGE ======================
app.get("/about", function(req, res) {
    res.render("about", { aboutEJScontent: aboutContent });
});



// ============= ERROR PAGE ======================
app.get('*', function(req, res) { res.render('error'); });

app.listen(process.env.PORT || 3000, function() { //process.env.PORT is for random port given by HEROKU  
    console.log(`Server started on port ${PORT}... `)
});