import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UnprocessableEntity } from "../exceptions/validation.js";
import { ErrorCode } from "../exceptions/root.js";
import { SECRET } from "../config/secrete.js";
import { prisma } from "../config/prisma.js";
import { Unauthorized } from "../exceptions/unauthorized.js";
import { NotFound } from "../exceptions/notFound.js";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return next(new UnprocessableEntity('Token not found', 404, ErrorCode.TOKEN_NOT_FOUND, null));
  }
  try {
    const payload = await jwt.verify(token, SECRET!) as any;
    const user = await prisma.user.findUnique({
      where: {
        id: payload.id
      }
    });
    if (!user) {
      return next(new NotFound('User not found', 404, ErrorCode.USER_NOT_FOUND, null));
    }
    req.user = user;
    next();
  } catch (error) {
    return next(new UnprocessableEntity('Invalid token', 404, ErrorCode.TOKEN_NOT_FOUND, null));
  }
};

const isAdmin: any = async (req: Request, res: Response, next: NextFunction) => {
  const user: any = req.user;
  if (!user || !user.is_admin) {
    return next(new Unauthorized('User is not an admin', 401, ErrorCode.USER_NOT_FOUND, null));
  }
  next();
};

const  isUser: any = async (req: Request, res: Response, next: NextFunction) => {
    const user: any = req.user;
    if (!user ||!user.is_user) {
      return next(new Unauthorized('User is not a user', 401, ErrorCode.USER_NOT_FOUND, null));
    }
    next();
  };
  
  const isTrainer: any = async (req: Request, res: Response, next: NextFunction) => {
    const user: any = req.user;
    if (!user ||!user.is_trainer) {
      return next(new Unauthorized('User is not a trainer', 401, ErrorCode.USER_NOT_FOUND, null));
    }
    next();
  };
  
  const isTrainee: any = async (req: Request, res: Response, next: NextFunction) => {
    const user: any = req.user;
    if (!user ||!user.is_trainee) {
      return next(new Unauthorized('User is not a trainee', 401, ErrorCode.USER_NOT_FOUND, null));
    }
    next();
  };
  
  export { authMiddleware, isAdmin, isUser, isTrainer, isTrainee };