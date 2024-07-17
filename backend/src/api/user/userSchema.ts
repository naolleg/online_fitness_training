import { z } from "zod";
import { Gender} from '@prisma/client';
const userSchema ={
   

  register: z.object({
    password: z.string().min(6),
    email: z.string().email(),
    fname: z.string().min(1),
    lname: z.string().min(1),
    gender: z.nativeEnum(Gender),
    imageurl:z.string().min(1),
  }),
  login: z.object({
    password: z.string().min(6),
    email: z.string().email(),
  }),
  changePassword:z.object({
    password: z.string().min(6),
    newpassword: z.string().min(6),
    conformpassword:z.string().min(6)
  }),
  updateUserInfo: z.object({
    fname: z.string().min(1),
    lname: z.string().min(1),
    gender: z.nativeEnum(Gender),
    imageurl:z.string().min(1),
  
  }),
};

export default userSchema;
