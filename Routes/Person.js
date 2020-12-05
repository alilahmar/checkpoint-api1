const express = require("express");
const controllers = require("../Controllers/Person.Controllers");

// router to take the method
const router = express.Router();
const Person = require("../Model/person");
//  Test Routing
// router.get("/", (req, res) => {
//   res.send("Hello");
// });

//  @Post Method
// @desc Post people
// @path: http://localhost:5000/api/people/
// Params Body
router.post("/", controllers.postPeople);

// @ Method Get
// @ desc Get all People
// @ path: http://localhost:5000/api/people/
router.get("/", controllers.getUsers);

// @ Method Get
// @ desc Get Person by id
// @ path: http://localhost:5000/api/people/:id
// @ params id
router.get("/:id", controllers.getUsersById);

//  @ Method Delete
//  Delete person by id
// path: http://localhost:5000/api/people/:id
// params id

router.delete("/:id", controllers.deleteUser);

// @ Method Put
// @ desc Update Person by Id
// path: http://localhost:5000/api/people/:id
// params id body
router.put("/:id", controllers.updateUser);

module.exports = router;
