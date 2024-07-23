import { Router } from "express";
import errorHandler from "../../../middleware/error";
import { isTrainee } from "../../../middleware/auth.js";
import traineeController from "./traineeController";

const trainerRouter = Router();

trainerRouter.post('/register',[isTrainee],errorHandler(traineeController.register));
trainerRouter.put('/update/:id',[isTrainee],errorHandler(traineeController.update));
trainerRouter.get('/getAll',[isTrainee],errorHandler(traineeController.getAll))
export default trainerRouter;
