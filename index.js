const express = require("express");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, cb) {
    let ext = file.originalname.substring(
      file.originalname.lastIndexOf("."),
      file.originalname.length
    );
    cb(null, file.originalname);
  },
});

const app = express();

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

app.post(
  "/uploads",
  upload.fields([
    { name: "first", maxCount: 1 },
    { name: "two", maxCount: 1 },
    { name: "three", maxCount: 1 },
  ]),
  (req, res) => {
    console.log("File uploaded successfully");
    res.end("File uploaded successfully");
  }
);

app.listen("5000", () => {
  console.log("Server connected on port 5000....");
});
