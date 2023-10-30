import {Router} from "express";
import {loginController} from "../controllers/au/loginController.js";
import {registerController} from "../controllers/au/registerController.js";
import {registerValidate} from "../validators/au/registerValidate.js";
import {refreshTokenController} from "../controllers/au/refreshTokenController.js";
import {authenticateJWT} from "../middlewares/authMiddleware.js";


const routerAuth = Router();

routerAuth.post('/login', loginController);
routerAuth.post('/register', registerValidate(), registerController);
routerAuth.post('/refresh-token', [authenticateJWT], refreshTokenController);

export default routerAuth;