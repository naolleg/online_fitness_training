import { Router } from "express";
import categoryController from "./catgoriesContoller";
import  errorHandler  from "../../middleware/error";

const categoryRouter = Router();


categoryRouter.post('/register',(categoryController.register));
categoryRouter.get('/getAll',errorHandler(categoryController.getAll))
categoryRouter.put('/update/:id',errorHandler(categoryController.update))
categoryRouter.delete('/delete/:id',errorHandler(categoryController.delete))

export default categoryRouter;