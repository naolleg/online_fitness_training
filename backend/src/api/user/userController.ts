import { NextFunction, Request, Response } from "express";
import { prisma } from "../../config/prisma.js";
import userSchema from "./userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import  STATUS from "@prisma/client";
import { SECRET } from "../../config/secrete.js";
import { generatePassword } from "../../util/generateor.js"
import { sendEmail } from "../../util/emailSender.js";

const userController = {
  
  login: async (req: Request, res: Response, next: NextFunction) => {
    const data = userSchema.login.parse(req.body);
    console.log("sdfvsf");
    
    const user = await prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
   
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    if (!bcrypt.compareSync(data.password, user.password)) {
      return res.status(404).json({
        success: false,
        message: "password is incorrect",
      });
    }
    if (user.status != STATUS.ACTIVE) {
      return res.status(404).json({
        success: false,
        message: "user is not active",
      });
    }
    console.log(user);
    
    const payload = {
      id: user.id,
      firstName: user.fname,
    };
    console.log("kdajkn");
    
    const token = await jwt.sign(payload, SECRET!);

    return res.status(200).json({
      success: true,
      message: "user logged in successfully",
      data: user,
      token: token,
    });
  },
  changePassword: async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const user = await prisma.user.findFirst({
      where: {
        id: +id,
      },
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    console.log("sdfvsf");
   const data = userSchema.changePassword.parse(req.body);
   if (!bcrypt.compareSync(data.password, user.password)) {
    return res.status(404).json({
      success: false,
      message: "password is incorrect",
    });
  }
    if (data.newpassword != data.conformpassword) {
      return res.status(404).json({
        success: false,
        message: "new passwords does not match",
      });
    }
    
    const salt = bcrypt.genSaltSync(10);
    const newpassword = bcrypt.hashSync(data.newpassword, salt);
    const updateUser = await prisma.user.update({
      where: {
        id: user!.id,
      },
      data: {
        password: newpassword,
      },
    });


    return res.status(200).json({
      success: true,
      message: "password updated successfully",
      data: updateUser,
    });
  },
  resetPassword: async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }
  
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
  
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  
    const newPassword = generatePassword();
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);
  
    const updateUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
      },
    });
  
    sendEmail(user.email, newPassword);
  
    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
      data: updateUser,
    });
  },
  updateUserInfo:async (req: Request, res: Response, next: NextFunction) => {
    console.log("jdh");
    
    const id = req.params.id;
    const data = userSchema.updateUserInfo.parse(req.body);
    const user = await prisma.user.findFirst({
      where: {
        id: +id,
      },
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    const updateUser = await prisma.user.update({
      where: {
        id: +id,
      },
      data: {
        fname: data.firstName,
        lname: data.lastName,
        gender:data.gender,
        imageurl:data.imageurl,
        
      },
    });

    return res.status(200).json({
      success: true,
      message: "user info updated successfully",
      data: updateUser,
    });
  },
  changeStatus: async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const user = await prisma.user.findFirst({
      where: {
        id: +id,
      },
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    const updateUser = await prisma.user.update({
      where: {
        id: +id,
      },
      data: {
        status: req.body.activeStatus,
      },
    });

    return res.status(200).json({
      success: true,
      message: "status updated successfully",
      data: updateUser,
    });
  },
  getAll:async(req: Request,res: Response,next: NextFunction)=>{

    try {
        const users= await prisma.user.findMany()
        res.status(200).json({ success: true,
          message: "all Users",users});
      } catch (error) {
        throw(error);
      }
    },
};
export default userController;
