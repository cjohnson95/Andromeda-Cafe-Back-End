require("dotenv").config();
require("./config/database");
const cors = require("cors");
const express = require("express");
const menuRoutes = require("./routes/MenuRoutes");
const path = require("path");
const port = process.env.PORT || 3001;
const app = express();

app.use("/", menuRoutes);

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/MenuRoutes", require("./routes/MenuRoutes"));

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
