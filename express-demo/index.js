//load the express module
const express = require("express");
//invoke const express and store the resulting application in const app
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!!"); //send a response to the client
});

//add a new route to return a list of courses
app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3]);
 });

 //environment variable

const port = process.env.PORT || 3000;
//listen on a dynamic port assigned by the hosting environment or 3000 if it's not defined
app.listen(port, () => console.log(`Listening on port ${port}...`));
 