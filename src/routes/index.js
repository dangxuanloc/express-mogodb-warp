import {Router} from "express";
import routerAuth from "./auth.js";
import routerUsers from "./user.js";


const router = Router();
router.use('/auth', routerAuth)
router.use('/users', routerUsers)

export default router;