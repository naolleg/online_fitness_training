import { Router } from "express";
import trainerRouter from "../api/user/trainer/trainerRoute";
import traineeRouter from "../api/user/trainee/traineeRoute";
import categoryRouter from "../api/categories/categoriesRoute";
import userRouter from "../api/user/userRoute";
import chatRouter from "../api/chats/chatRoute";
import adminRouter from "../api/admin/adminRoute";
const appRouter = Router();
//import all routes
appRouter.use("/trainer",trainerRouter)
appRouter.use("/trainee",traineeRouter)
appRouter.use("/category",categoryRouter)
appRouter.use("/user",userRouter)
appRouter.use("/chat",chatRouter)
appRouter.use("/admin",adminRouter)






export default appRouter;
