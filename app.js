const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;
const indexRouter = require("./routes/indexRouter");
require("dotenv").config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(3000, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server LIVE, listening on port ${PORT}`);
});
