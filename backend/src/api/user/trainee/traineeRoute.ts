import { Router } from "express";
import errorHandler from "../../../middleware/error";
import { isTrainee } from "../../../middleware/auth.js";
import traineeController from "./traineeController";

const traineeRouter = Router();

traineeRouter.post('/register',[isTrainee],errorHandler(traineeController.register));
traineeRouter.put('/update/:id',[isTrainee],errorHandler(traineeController.update));
traineeRouter.get('/getAll',[isTrainee],errorHandler(traineeController.getAll))
export default traineeRouter;
