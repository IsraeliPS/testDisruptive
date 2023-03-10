import * as express from "express";
import { dataRouter } from "./dataRouter";

export const apiRouter=(app:express.Application)=>{
  app.use("/data", dataRouter)
  
}