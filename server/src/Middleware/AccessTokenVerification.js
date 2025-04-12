import jwt from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import dotenv from "dotenv"
dotenv.config();

const verifyAccessToken = async (req, res, next) =>{
    const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
    console.log(req.cookies)
    if (!accessToken) {
        return res.status(401).json(new ApiResponse(401, null, "Access denied. No token provided."));
    }

    console.log("i am in the verify middleware")
    jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.sendStatus(403); //invalid token
            req.user = decoded
            console.log(req.user)
            next();
            
        }
    );
    
}



export {verifyAccessToken}