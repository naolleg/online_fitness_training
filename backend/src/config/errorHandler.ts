import { NextFunction, Request, Response } from "express";
import { ErrorCode, HttpExecption } from "../exception/root";
import { InternalException } from "../exception/internalException";

const errorHandler:any =(method:Function)=> {
   return async (req:Request,res:Response,next:NextFunction)=>{
      try {
        await method(req,res,next);
      } catch (error:any) {
         //   console.log(error.message);
         let exception:HttpExecption;
         if(error instanceof HttpExecption){
            exception = error;
         }else{
            exception = new InternalException('something is wrong',500,ErrorCode.INTERNAL_EXCEPTION,null);
         }
         next(exception);
      }
   }

}

export default errorHandler;