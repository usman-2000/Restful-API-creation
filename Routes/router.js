const express = require("express");
const router = express.Router();
const controllers = require("../Controllers/userControllers");

router.post("/users/registers", controllers.userPost);
router.get("/users/getAllUsers", controllers.allUsersGet);
router.get("/users/getSingleUser/:id", controllers.getSingleUser);
router.delete("/users/deleteUser/:id", controllers.deleteUser);

module.exports = router;
