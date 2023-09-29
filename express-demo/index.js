//load the express module
const express = require("express");
//invoke const express and store the resulting application in const app
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//add a new route to return a list of courses
app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3]);
 });

 //listen on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
  
