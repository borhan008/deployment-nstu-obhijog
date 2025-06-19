const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./src/routes/routes");
const authMiddleware = require("./src/middlewares/auth");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/api/", authMiddleware, router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
