import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { uploadOnCloudinary } from "../utils/Cloudinary.js"
import { sendVerificationEmail } from "../utils/emailSender.js"
import jwt from "jsonwebtoken"
import upload from "../Middleware/Multer.js"


const generateAccessTokenAndRefreshToken = async (user_id) => {
    try {
        const user = await User.findOne(user_id)

        const refreshToken = user.generateRefreshToken();
        const accessToken = user.generateAccessToken();

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { refreshToken, accessToken }

    } catch (error) {
        throw new ApiError(500, "Some went wrong while generating Access and Refresh Tokens")
    }

}

const generateVerificationToken = async (email) => {
    try {
        const user = await User.findOne({ email })
        const verification = user.generateVerificationToken();

        user.verificationToken = verification

        await user.save({ validateBeforeSave: false })
    } catch (error) {
        console.log("Error occured while generating the verification token ", error)
    }
}

const registerUser = async (req, res) => {

    // get the data from frontend
    // check if the fields are filled with information it supposed to store
    // does anyone else have the account with the same email or phonenumber
    // hash the password
    // send the verification email to user
    // set the verified true to user if the user has verified it's email

    try {

        const { fullName, username, email, password, phoneNumber, emailVerified, verificationToken } = req.body
        console.log(fullName, username)
        if ([fullName, username, email, password, phoneNumber].some((field) => field?.trim() === "")) {
            return res.status(409).json(new ApiResponse(409, null, "All fields are required"));
        }

        const userExists = await User.findOne({
            $or: [
                { email: email },
                { phoneNumber: phoneNumber },
                { username: username }
            ]
        }).then((user) => user ? true : false)

        if (userExists) {
            return res.status(409).json(new ApiResponse(409, null, "This email, phone number, or username is already registered with us"));
        }
        


        const user = await User.create({
            fullName,
            username,
            phoneNumber,
            email,
            verificationToken,
            emailVerified,
            password

        })

        
        await user.save;
        const verificationTokenVal = user.generateVerificationToken(user.email)
        user.verificationToken = verificationTokenVal;
        user.save({ validateBeforeSave: false })
        sendVerificationEmail(email, fullName, `http://localhost:5173/verify/${verificationTokenVal}`)
        const createdUser = await User.findById(user._id).select("-password -refreshToken")
        // verificationToken = User.generateVerificationToken();

        return res
            .status(200)
            .json(new ApiResponse(200, createdUser, "The account has been created"
            ))
    } catch (err) {
        return res.status(501).json(new ApiError(501, err.message || "Error occured while creating user"))
    }
}

const verifyingUser = async (req, res) => {

    const { token } = req.params;
    let decoded
    try {
        decoded = jwt.verify(token, process.env.VERIFICATION_TOKEN_SECRET);
        if (!decoded) {
            throw new ApiError(401, "Invalid Token")
        }
    } catch (error) {
        return res.json(new ApiError(401, null, error.message))
    }



    const user = await User.findOne({ email: decoded.email })

    user.emailVerified = true
    user.verificationToken = ""

    user.save({ validateBeforeSave: false })

    return res.status(201).json(new ApiResponse(201, null, "User has been verified"))
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password)

    const user = await User.findOne({ email })

    if (!user) return res.status(401).json(new ApiResponse(401,null, "User not Found"))

    const isUserValid = await user.isPasswordCorrect(password)

    if (!isUserValid)return res.status(401).json(new ApiResponse(401,null, "Incorrect password"))

    if (!user.emailVerified) {
        console.log(user.emailVerified)
        return res.json(new ApiResponse(400,null, "Please Verify your email"))
    }

    const { refreshToken, accessToken } = await generateAccessTokenAndRefreshToken(user._id);

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("refreshToken", refreshToken, options)
        .cookie("accessToken", accessToken, options)
        .json(new ApiResponse(201, { accessToken, refreshToken, userId: user._id }, "User has Logged In"))


}




const logoutUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.user._id,
            {
                $unset: {
                    refreshToken: 1
                }
            },
            {
                new: true
            }
        )

        const options = {
            httpOnly: true,
            secure: true
        }

        user.save({ validateBeforeSave: false })

        return res.clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json(new ApiResponse(200, null, "User has logout"))

    }
    catch (error) {
        res.status(501, {}, "Error ")
    }
}

const gettingAllUser = async (req, res) => {
    const loggedInUser = req.user._id;
    
    try {
        const users = await User.find({_id: {$ne : loggedInUser}}).select("-password -refreshToken")
        if (!users) {
            return res.status(500).json(new ApiError(500, "User not found"))
        }
        
        return res.status(200).json(new ApiResponse(200, users, "All users has been fetched"))

    } catch (error) {
        return res.status(500).json(new ApiError(500, "Error while fetching profiles"))
    }

}





export { registerUser, verifyingUser, loginUser, gettingAllUser, logoutUser };