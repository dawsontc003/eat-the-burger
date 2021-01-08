const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "dt3bgg3gu6nqye5f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ypnqdhinu2omdpj2",
  password: "nk2rsd5yw6r4tp9n",
  database: "czbpcumq4srxky2j",
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
