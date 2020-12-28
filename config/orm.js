const connection = require("connection");

const selectAll = () => {
  connection.query("SELECT * FROM burgers", (err, res) => {
    if (err) throw err;

    // Log all results of the SELECT statement
    console.table(res);
  });
};

selectAll();
