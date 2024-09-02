import { NextFunction, Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
import { UnprocessableEntity } from "../../exception/validation.js";
import { ErrorCode } from "../../exception/root.js";
import { ChatEventEnum, emitSocketEvent } from "../../socket/index.js";

const chatController = {

  // Create a one-to-one chat
  createOneToOneChat: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const receiverId = +req.params.id;
      const existingChat = await prisma.chat.findFirst({
        where: {
          OR: [
            { participants: { some: { id: req.user?.id } }, participants: { some: { id: receiverId } } },
            { participants: { some: { id: receiverId } }, participants: { some: { id: req.user?.id } } },
          ],
          isGroup: false,
        },
      });
      if (existingChat) {
        return res.status(200).json(existingChat);
      }
      const newChat = await prisma.chat.create({
        data: {
          isGroup: false,
          participants: {
            connect: [{ id: req.user?.id }, { id: receiverId }],
          },
          name: "single",
        },
      });
      
      // Emit a NEW_CHAT_EVENT to the receiver's socket
      emitSocketEvent(req, receiverId, ChatEventEnum.NEW_CHAT_EVENT, newChat);
      
      return res.status(200).json(newChat);
    } catch (error) {
      next(error);
    }
  },

  // Get all chats for a user
  getAllChats: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?.id;
      const chats = await prisma.chat.findMany({
        where: {
          participants: { some: { id: userId } },
        },
        include: {
          participants: true,
        },
      });
      return res.status(200).json(chats);
    } catch (error) {
      next(error);
    }
  },
};

export default chatController;