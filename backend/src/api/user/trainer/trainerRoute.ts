import { Router } from "express";
import errorHandler from "../../../middleware/error";
import trainerController from "./trainerController.js";
import { isTrainer } from "../../../middleware/auth.js";

const trainerRouter = Router();

trainerRouter.post('/register',errorHandler(trainerController.requestRegistration));
trainerRouter.put('/update/:id',errorHandler(trainerController.update));
trainerRouter.get('/getAll',errorHandler(trainerController.getAll))
export default trainerRouter;
