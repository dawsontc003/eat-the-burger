const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Dynasty1003!",
  database: "burgersDB",
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`Connect at ${connection.threadId}`);
});

// let burger = "Veggie burger";
// const burger2 = false;

// console.log(burger, burger2);

const updateOne = () => {
  let burger = "Veggie burger";
  const burger2 = false;
  connection.query(
    "INSERT INTO burger SET ?",
    {
      burger,
      burger2,
    },
    (err, res) => {
      if (err) throw err;
    }
  );
};

//updateOne();

module.exports = connection;
