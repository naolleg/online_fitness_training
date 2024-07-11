import { Router } from "express";
const adminRouter:Router = Router();
import authController from "./adminController.js";
import errorHandler from "../../config/errorHandler.js";


//routes
adminRouter.post("/login", errorHandler(authController.loginAdmin));
adminRouter.post("/register", errorHandler(authController.registerAdmin));
adminRouter.get('/me', errorHandler(authController.myInfo));

export default adminRouter;