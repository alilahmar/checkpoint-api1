const express = require("express");
const dbPerson = require("./config/personDB");
require("dotenv").config();

const app = express();
// Connect Database
dbPerson();

// create Routes

// middleware routing Body parse
app.use(express.json());

app.use("/api/people", require("./Routes/Person"));

const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running")
);
