// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const connection = require("./config/connection");

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// // Data
// const lunches = [
//   {
//     lunch: "Beet & Goat Cheese Salad with minestrone soup.",
//   },
//   {
//     lunch: "Pizza, two double veggie burgers, fries with a Big Gulp",
//   },
// ];

let burgerAvailable;

// Routes
app.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM burgers WHERE devoured=true;",
    (err, data) => {
      if (err) throw err;

      burgerAvailable = data;

      //   res.render("index", { burgers: data });
    }
  );
  connection.query(
    "SELECT * FROM burgers WHERE devoured=false;",
    (err, data1) => {
      if (err) throw err;

      console.log(data1);
      console.log(burgerAvailable);

      res.render("index", { burgers: burgerAvailable, burgers1: data1 });
    }
  );
});

// Update route for sql DB
app.put("/update", (req, res) => {
  const plan = 1;
  const id = 1;
  connection.query(
    "UPDATE burgers SET devoured = ? WHERE id = ?",
    [plan, id],
    (err, result) => {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      console.log(plan, id);
      res.end();
    }
  );
});

// Post request listener
// app.post("/", (req, res) => {
//   //   connection.query(
//   //     "INSERT INTO burgers (burger_name,devoured)",
//   //     [req.body.BurgerType],
//   //     (err, result) => {
//   //       if (err) throw err;
//   //       res.redirect("/");
//   //     }
//   //   );
//   console.log([req.body.BurgerType]);
//   res.redirect("/");
// });

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
