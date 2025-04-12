import express from "express"
import { getUsersForSidebar, getMessages, sendMessage, gettingRecieverUser, getContacts, getChatUsers } from "../controllers/message.controller.js";
import { verifyAccessToken } from "../Middleware/AccessTokenVerification.js";

const router = express.Router();

router.get("/getchatusers", verifyAccessToken, getChatUsers)
router.get("/users", verifyAccessToken, getUsersForSidebar )
router.get("/contacts/:userId", verifyAccessToken, getContacts)
router.get("/:id", verifyAccessToken, getMessages )
router.post("/send/:id", verifyAccessToken, sendMessage)
router.get("/receiver/:_id", verifyAccessToken, gettingRecieverUser)

export default router;