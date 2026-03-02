const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.listen(process.env.PORT || 8080, () => {
  console.log(`server is running on port: ${process.env.PORT}`);
});
