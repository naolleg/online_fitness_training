// import { Router } from "express";
// import errorHandler from "../../config/errorHandler.js";
// import chatController from "./chatController.js";
// import messageController from "./messageController.js";
// import { upload } from "../../config/multer.js";


// const chatRouter: Router = Router();

// // //chat 
//  chatRouter.post('/create/group', errorHandler(chatController.createAGroupChat));
//  chatRouter.post('/create/onetoone/:receiverId', errorHandler(chatController.createOneToOneChat));
//  chatRouter.get('/getmy',errorHandler(chatController.getAllMyChat));
//  chatRouter.put('/rename/:id', errorHandler(chatController.renameGroupChat));
//  chatRouter.put('/addparticipant/:id' ,errorHandler(chatController.addNewParticipantInGroupChat));
//  chatRouter.put('/removeparticipant/:id' ,errorHandler(chatController.removeParticipantFromGroupChat));
//  chatRouter.delete('/delete/:id', errorHandler(chatController.deleteChat));
//  // messages
//  chatRouter.get('/message/:id' , errorHandler(messageController.getMessages));
//  chatRouter.post('/message/send/:id',upload.fields([{ name: "attachments", maxCount: 5 }]),errorHandler(messageController.sendMessage));


// export default chatRouter;