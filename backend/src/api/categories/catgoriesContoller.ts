import { NextFunction, Request, Response } from "express";
import { prisma } from "../../config/prisma.js";

const categoryController={
    register: async(req: Request,res: Response,next: NextFunction)=>{
        console.log("JKHJDSDSJ");
        

        const newCategory = await prisma.categories.create({
            data:{
                name: req.body.name,
              
            }
        });
        return res.status(200).json({
            success: true,
            message: 'register category',
            data: newCategory
        })
    },
    update: async(req: Request,res: Response,next: NextFunction)=>{
        const id = req.params.id;
       
        
        const categoryExist = await prisma.categories.findFirst({where:{
            id: +id,
        }})
        if(!categoryExist){
            return res.status(404).json({
                success: false,
                message: "category not found"
            })
        }

        const updateCategory = await prisma.categories.update({
            where:{
                id: +id,
            },     
         
            data:{
                name: req.body.name,
                }
        });

        return res.status(200).json({
            success: true,
            message: 'updated category',
            data: updateCategory
        })
    },
    getAll:async(req: Request,res: Response,next: NextFunction)=>{

        try {
            const category= await prisma.categories.findMany()
            res.status(200).json({ success: true,
              message: "all category",category});
          } catch (error) {
            throw(error);
          }
        },

    delete: async(req: Request,res: Response,next: NextFunction)=>{
        const id = req.params.id;
        const categoryExist = await prisma.categories.findFirst({where:{
            id: +id,
        }})
        if(!categoryExist){
            return res.status(404).json({
                success: false,
                message: "category not found"
            })
        }
        const deletedCategory = await prisma.categories.delete({
            where: {
                id: +id
            }
        });

        return res.status(200).json({
            success: true,
            message: 'category deleted sucessfully',
            data:deletedCategory
        })
    },

}
export default categoryController;