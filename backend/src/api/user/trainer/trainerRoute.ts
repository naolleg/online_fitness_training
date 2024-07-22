import { Router } from "express";
import errorHandler from "../../../middleware/error";
import trainerController from "./trainerController.js";
import { isTrainer } from "../../../middleware/auth.js";

const trainerRouter = Router();

trainerRouter.post('/register',[isTrainer],errorHandler(trainerController.requestRegistration));
trainerRouter.put('/update/:id',[isTrainer],errorHandler(trainerController.update));
trainerRouter.get('/getAll',[isTrainer],errorHandler(trainerController.getAll))
export default trainerRouter;
