const { Pool } = require("pg");

module.exports = new Pool ({
  host: "localhost",
  user: "poistj",
  password: "",
  database: "tcg_inv",
  port: 5432
})
