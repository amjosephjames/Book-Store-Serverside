const express = require("express");
const router = require("./router/bookRouter");
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = process.env.PORT || 2024;
const app = express();

require("./utils/db");
app.use(express.json());
app.use(cors());
dotenv.config();
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "welcome to my book store api",
  });
});

app.use("/api/book", router);

app.listen(PORT, () => {
  console.log(`Server up on PORT: ${PORT}`);
});
