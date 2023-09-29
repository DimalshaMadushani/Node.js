const Joi = require("joi"); //returns a class
//load the express module
const express = require("express");
//invoke const express and store the resulting application in const app
const app = express();

app.use(express.json()); //add a piece of middleware
//middleware functions have access to the request and response objects

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


// //add a new route to handle post requests
// app.post("/api/courses", (req, res) => {
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name //assuming that there is a name property in the body of the request
//     };
//     courses.push(course);
//     res.send(course);   
// });

//http put request to update a course
app.put("/api/courses/:id", (req, res) => {
    //look up the course
    //if not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given ID was not found."); //404 object not found

    //validate
    //if invalid, return 400 - bad request
    const { error } = validateCourse(req.body); //result.error
    if (error) return res.status(400).send(error.details[0].message);
    //update course
    course.name = req.body.name;
    //return the updated course
    res.send(course);

});

//validate function
function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema); //returns a result object
}

 //environment variable
const port = process.env.PORT || 3000;
//listen on a dynamic port assigned by the hosting environment or 3000 if it's not defined
app.listen(port, () => console.log(`Listening on port ${port}...`));




