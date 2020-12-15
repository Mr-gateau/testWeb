const source = require("express").Router();
const connection = require("../conf.js");

source.get("/:id", (req, res) => {
  id = req.params.id;
  console.log(id);
  connection.query("SELECT * FROM title", (err, results) => {
    if (err) {
      res.status(404).send("Not found");
      console.log(err);
    } else {
      res.status(200).json(results[0]);
    }
  });
});
//Function is everywhere to make a good object
// create a good database.
// export all element here.

module.exports = source;
