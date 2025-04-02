import { NextFunction ,Request , Response } from "express";


import jwt  from "jsonwebtoken";
import { JWT_SECRET } from "./config";

declare module "express-serve-static-core" {
    interface Request {
      userId?: string;
    }
  }

export const userMiddleware = (req:Request , res:Response,
    next:NextFunction)=>{
        const header = req.headers["authorization"]

        const decoded = jwt.verify(header as string , JWT_SECRET ) as{id:string}
        if(decoded){
          req.userId = decoded.id;  
         
          next()
        }else{
            res.json({
                msg:"incorrect username or password"
            })
        }
    }

