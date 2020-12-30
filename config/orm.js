const connection = require("./connection");

const selectAll = () => {
  connection.query("SELECT * FROM burgers", (err, res) => {
    if (err) throw err;

    // Log all results of the SELECT statement
    console.table(res);
  });
};

selectAll();
// let burger = "Veggie burger";
// const burger2 = false;

// console(burger, false);

// const insertOne = () => {
//   connection.query(
//     "INSERT INTO employee SET ?",
//     {
//       burger,
//       burger2,
//     },
//     (err, res) => {
//       if (err) throw err;

//       // Log all results of the SELECT statement
//       console.table(res);
//     }
//   );
// };

// insertOne();
