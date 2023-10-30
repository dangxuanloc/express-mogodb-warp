import {Router} from "express";
import {getAllUserController} from "../controllers/users/userController.js";
import {authenticateJWT} from "../middlewares/authMiddleware.js";


const routerUser = Router();

routerUser.get('/', [authenticateJWT], getAllUserController);

export default routerUser;