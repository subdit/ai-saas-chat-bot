import { NextFunction } from "express";
import User from '../models/user.js';

export const getAllUsers = async(
  req: Request,
  res: Response,
  next: NextFunction
)=> {
  try {
  // get all users
  const users = await User.find();
  return res.status(200).json({message: 'Okay', users});
  } 
  catch(error){
  console.log(error);
  return res.status(200).json({message: "Error", error.messages});
  }
}

