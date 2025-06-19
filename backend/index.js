const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./src/routes/routes");
const authMiddleware = require("./src/middlewares/auth");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      "https://deployment-nstu-obhijog.vercel.app/",
      "https://deployment-nstu-obhijog-toeh.vercel.app/",
      "https://deployment-nstu-obhijog-toeh-git-main-sagors-projects-ba38280f.vercel.app/",
      "https://deployment-nstu-obhijog-ju4brycg1-sagors-projects-ba38280f.vercel.app/",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use("/api/", authMiddleware, router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
