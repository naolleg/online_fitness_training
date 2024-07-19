import { NextFunction, Request, Response } from "express";
import userSchema from "../userSchema.js";
import { prisma } from "../../../config/prisma.js";
import { url } from "inspector";
import bcrypt from "bcrypt";
import { Role, Status } from "@prisma/client";


const traineeController={
    register: async(req: Request,res: Response,next: NextFunction)=>{
        console.log("wfedc");
        
        const data = userSchema.register.parse(req.body);
        const userExist = await prisma.user.findFirst({where:{
            email: req.body.email,
        }})
        if(!userExist){
            return res.status(404).json({
                success: false,
                message: "Email is already in use"
            })
        }
        const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const newUser = await prisma.user.create({
    data: {
      role:"Trainee",
      email: data.email,
      dateOfBirth:data.dateOfBirth,
      fname: data.fname,
      lname: data.lname,
      gender:data.gender,
      password: hashedPassword,
      status: Status.Active,
      trainee:{
        create:{
            trainee_status:{
                create:{
                    height:req.body.height,
                    weight:req.body.weight,
                    allergies:req.body.allergies,
                    medical_conditions:req.body.medical_conditions,
                    medications:req.body.medications
        }
        }
      }
    },
  }}
);

  return res.status(200).json({
    success: true,
    message: "a trainee User created successfully",
    data: newUser,
  });
},
    update: async(req: Request,res: Response,next: NextFunction)=>{
        const data = userSchema.updateUserInfo.parse(req.body);
        const id = req.params.id;
        const isuserExist = await prisma.user.findFirst({
            where: {
                id:+id,
            }
        });
        if(!isuserExist){
            return res.status(404).json({
                success: false,
                message: "user not found",
            });
        }
        const updatedTrainee = await prisma.user.update({
            where:{
                id: +id,
            },
            data: {
                dateOfBirth:data.dateOfBirth,
                fname: data.fname,
                lname: data.lname,
                trainee:{
                  create:{
                      trainee_status:{
                          create:{
                            height:req.body.height,
                            weight:req.body.weight,
                            allergies:req.body.allergies,
                            medical_conditions:req.body.medical_conditions,
                            medications:req.body.medications
                  }
                  }
                }
              },
            }
        });
        return res.status(200).json({
            success: true,
            message: "trainee successfully updated",
            data: updatedTrainee
        });
    },
   
   
    getAll: async (req: Request, res: Response, next: NextFunction) => {
        try {
          const trainees = await prisma.user.findMany({
           where:{
            role:"Trainee"
           }
          });
          res.status(200).json({ success: true, message: "all trainees", trainees });
        } catch (error) {
          throw error;
        }
      },
    }

export default traineeController;