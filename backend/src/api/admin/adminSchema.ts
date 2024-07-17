import { z } from "zod";

const authSchema ={
    registerAdmin: z.object({}),
    login: z.object({})
}
export default authSchema;