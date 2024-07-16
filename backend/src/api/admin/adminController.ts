import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import {prisma} from '../../config/prisma.js'
import { SECRET } from '../../config/secrete.js'
import { BadRequest } from '../../exception/badRequest.js'
import { ErrorCode } from '../../exception/root.js'
import { STATUS_CODES } from 'http'
import { UnprocessableEntity } from '../../exception/validation.js'
import authSchema from './adminSchema.js'
import { generateOTP } from '../../utils/generator.js'

const authController = {
   //register
   registerAdmin:async (req:Request,res:Response,next:NextFunction)=>{
      authSchema.registerAdmin.parse(req.body);
      //check if the email or phone used befor
      const isAdminExist= await prisma.admin.findFirst({where:{
         OR:[
            {email: req.body.email},
          
         ]
       
      }});
      if(isAdminExist){
       return next(new UnprocessableEntity('Email  has been registered before',403,ErrorCode.USER_ALREADY_EXIST,null));
      }
      // create the admin
      const otp= generateOTP();
      const password = bcrypt.hashSync(req.body.password, 10);
      const newAdmin = await prisma.admin.create({
         data: {
            email: req.body.email,
            fname: req.body.fname,
            lname: req.body.lname,
            password: password,
            username:req.body.username,
          
               }
            })
            res.status(201).json(newAdmin);
         },
      
      
   //login admin
   loginAdmin: async (req: Request, res: Response, next: NextFunction) => {
      authSchema.login.parse(req.body);
      const admin = await prisma.admin.findFirst({ where: { email: req.body.email } });
      if (!admin) {
         return next(new UnprocessableEntity("No account found with this email", 403, ErrorCode.USER_NOT_FOUND, null));
      }
      const isMatch = bcrypt.compareSync(req.body.password, admin.password);
      if (!isMatch) {
         return next(new UnprocessableEntity('Incorrect password', 403, ErrorCode.INCORRECT_PASSWORD, null));
      }
      const adminProfiles = await prisma.admin.findFirst({ where: { id: admin.id } });
      // Create token
      const payload = {
         id: admin.id,
         fname: adminProfiles?.fname
      };
      const token = jwt.sign(payload, SECRET!);
      return res.status(200).json({
         token,
         message: "Login successfully"
      });
   },
   myInfo: async (req: Request, res: Response, next: NextFunction) =>{
      console.log(req.admin)
      const admin = await prisma.admin.findFirst({
         where:{id:req.admin!.id},
         include: {
            _count: true,
         }
      });
      res.status(200).json(admin);
      
   }

}

export default authController;
