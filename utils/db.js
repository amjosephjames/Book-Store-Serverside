const mongoose = require("mongoose");
const url = "mongodb://localhost/authdb";
const lifeURI =
  "mongodb+srv://joseph4231:Barca4231@cluster0.zrkxc.mongodb.net/BookStoreDb?retryWrites=true&w=majority";

mongoose.connect(lifeURI);
mongoose.connection
  .on("open", () => {
    console.log("DataBase Connected");
  })
  .once("error", (error) => {
    console.log(`Failed to Connect to the Database\n ${error}`);
  });
