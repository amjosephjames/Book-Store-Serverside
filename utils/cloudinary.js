const cloudinary = require("cloudinary");
require("dotenv").config();
cloudinary.config({
  // cloud_name: "dbknzmvbp",
  // api_key: "159844567759941",
  // api_secret: "LQPB0gtkwP8E1VIyMrs2Y5xZBJc",

  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDKEY,
  api_secret: process.env.CLOUDSECRET,
  secure: true,
});
module.exports = cloudinary;
