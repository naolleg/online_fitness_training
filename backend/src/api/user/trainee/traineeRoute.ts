import { Router } from "express";
import errorHandler from "../../../middleware/error";
import { isTrainee } from "../../../middleware/auth.js";
import traineeController from "./traineeController";

const traineeRouter = Router();

traineeRouter.post('/register',errorHandler(traineeController.register));
traineeRouter.put('/update/:id',errorHandler(traineeController.update));
traineeRouter.get('/getAll',errorHandler(traineeController.getAll))
export default traineeRouter;
