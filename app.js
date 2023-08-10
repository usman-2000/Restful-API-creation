require("dotenv").config();
const express = require("express");
const app = express();
require("./db/connect");
const cors = require("cors");
const PORT = 5004;
const router = require("./Routes/router");

app.use(cors());
app.use(express.json());
app.use(router);

// get response

// app.get("/", (req, res) => {
//   res.status(200).json("Server Started by usman");
// });

// Server Start
app.listen(PORT, () => {
  console.log(`Server Start at PORT : ${PORT}`);
});
