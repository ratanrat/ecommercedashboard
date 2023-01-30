const express = require("express");

const app = express();

// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("hii welcome to world");
});
app.listen(5000, () => {
  console.log("listening on port 5000");
});
