const express = require("express");
const bodyParser = require("body-parser");
//for geting date in todolist
const date = require(__dirname + "/date.js")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//for using the style sheets we use explicitly create this thing for express
app.use(express.static("public"));

app.set('view engine', 'ejs');

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function (req, res) {
  //instead of writing all date methods I simply created a module and access it using require(date);
  //let day = date();
  let day = date.getDate();
  res.render('list', { listTitle: day, newListItems: items });

});

app.post("/", function (req, res) {
  item = req.body.newItem;
  if (req.body.list == "Work") {
    workItems.push(item);
    res.redirect("/work");
  }
  else {
    items.push(item);
    res.redirect("/");
  }

});


app.get("/work", function (req, res) {
  res.render('list', { listTitle: "Work List", newListItems: workItems });
});
app.post("/work", function (req, res) {
  console.log(item);
  res.redirect("/work");
})

app.get("/about", function (req, res) {
  res.render('about');
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
