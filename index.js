const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
//connect DATABASE

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    // Thực hiện các thao tác khác ở đây sau khi đã kết nối thành công
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// mongoose.connect(
//   "mongodb+srv://phamhuutri101:Tripham1080@cluster0.ecitgup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
//   () => {
//     console.log("connect to mongodb");
//   }
// );

app.use(bodyParser.json({ limit: "50mb" })); // giúp gửi dữ liệu lên dễ hơn dưới dạng json
app.use(cors());
app.use(morgan("common")); // khi gửi dữ liệu lên thì sẽ trả về màn hình terminals

app.get("/api", (req, res) => {
  res.status(200).json("hello");
});

app.listen(8000, () => {
  console.log("server is running on");
});
