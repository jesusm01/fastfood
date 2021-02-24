import express from "express";
import IndexController from "../controller/indexController.js";
import RestController from "../controller/restController.js";
import UserController from "../controller/userController.js";
import RolesController from "../controller/rolesContoller.js";
var router = express.Router();
var indexControler = new IndexController();
var userController = new UserController();
var rolesController = new RolesController();

var restController = new RestController();
/* GET home page. */
/**
 * Endpoints de los usuarios
 * // Servicios de los usuarios
 */
router.get("/", indexControler.index);
router.get("/user", userController.getUsers);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.post("/addRol", userController.addRol);
/* GET home page. */
/**
 * Endpoints de los usuarios
 * // Servicios de los ROLES
 */
router.post("/roles", rolesController.createRol);
router.get("/roles", rolesController.getRol);
router.get("/roles/:key", rolesController.getRol);
router.put("/roles/:id", rolesController.updateRol);
router.delete("/roles/:id", rolesController.deleteRol);

router.get("/rest", restController.getResto);
router.post("/rest", restController.createResto); /**usa los metodos clases de RestController createResto */
router.put("/rest/:id", restController.updateResto);
router.delete("/rest/:id", restController.deleteResto);


export default router;
