const express = require("express");
var app = express();

// const mdlwre = (req, res, next) => {
//   const date = new Date();
//   const day = date.getDay();
//   const hour = date.getHours();
//   if (day > 0 && day < 6 && hour >= 9 && hour <= 17) {
//     next();
//   } else {
//     res.send("<h1>Not available at this time!</h1>");
//   }
// };
app.use((req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  if (day > 0 && day < 6 && hour > 9 && hour < 17) {
    next();
  } else {
    res.send("<h1>Not available at this time!</h1>");
  }
});

app.use(express.static("pages"));

var PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is running on port ${PORT}`)
);
