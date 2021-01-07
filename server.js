// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");
var bodyParser = require("body-parser");

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.use(bodyParser.json());
app.set("view engine", "handlebars");

let burgerAvailable;

// Routes
app.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM burgers WHERE devoured=false;",
    (err, data) => {
      if (err) throw err;

      burgerAvailable = data;
    }
  );
  connection.query(
    "SELECT * FROM burgers WHERE devoured=true;",
    (err, data1) => {
      if (err) throw err;

      res.render("index", { burgers: burgerAvailable, burgers1: data1 });
    }
  );
});

// Update route for sql DB
app.put("/:id", (req, res) => {
  connection.query(
    "UPDATE burgers SET devoured = 0 WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});
// Request response for insert of new burger
app.post("/", (req, res) => {
  let devoured = "0";
  connection.query(
    "INSERT INTO burgers SET burger_name = ?, devoured = ?",
    [req.body.burger, devoured],
    (err, result) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
});

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
