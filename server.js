require("dotenv").config();
require("./config/database");
const express = require("express");
const menuRoutes = require("./routes/MenuRoutes")
const path = require("path");
const port = process.env.PORT || 3001;
console.log(process.env);
const app = express();

app.use("/api", menuRoutes)