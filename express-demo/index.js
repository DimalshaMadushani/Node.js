//load the express module
const express = require("express");
//invoke const express and store the resulting application in const app
const app = express();

const courses = [  
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" }
];

app.get("/", (req, res) => {
  res.send("Hello World!!!"); //send a response to the client
});

//add a new route to return a list of courses
app.get("/api/courses", (req, res) => {
    res.send(courses);
 });

 //add a new route to return a list of 
app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    //if not existing, return 404 - object not found
    if(!course) res.status(404).send("The course with the given ID was not found."); //404 object not found
    res.send(course);//return the object
});


 //environment variable
const port = process.env.PORT || 3000;
//listen on a dynamic port assigned by the hosting environment or 3000 if it's not defined
app.listen(port, () => console.log(`Listening on port ${port}...`));
 
