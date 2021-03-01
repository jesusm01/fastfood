import express from "express";
import IndexController from "../controller/indexController.js";
import RestController from "../controller/restController.js";
import UserController from "../controller/userController.js";
import RolesController from "../controller/rolesContoller.js";
import MenuController from "../controller/menuController.js";
import OrdenController from "../controller/ordenController.js";


var router = express.Router();
var indexControler = new IndexController();
var userController = new UserController();
var rolesController = new RolesController();

var restController = new RestController();
var menuController = new MenuController();
var ordenController = new OrdenController();
/* GET home page. */
/**
 * Endpoints de los usuarios
 * // Servicios de los usuarios
 */
router.get("/", indexControler.index);
router.post("/login",indexControler.login);

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
router.post("/rest/upload/:id", restController.upload);
router.get("/showAvatar/:name", restController.getAvatar);
router.get("/restid/:id",restController.getRestId);


router.put("/menu/:id",menuController.createMenu);
router.get("/menu/:id",menuController.getMenu);
router.get("/menu/unique/:id",menuController.getMenuUnique);
router.put("/menu/update/:id",menuController.updateMenu);
router.delete("/menu/:id",menuController.deleteMenu);
router.post("/menu/upload/:id",menuController.upload);
router.get("/menu/showavatar/:name",menuController.getAvatar);


router.post("/orden",ordenController.createOrden);
router.get("/orden",ordenController.getOrden);
router.delete("/orden/:id",ordenController.deleteOrden);
router.put("/orden/:id",ordenController.updateOrden);


export default router;
