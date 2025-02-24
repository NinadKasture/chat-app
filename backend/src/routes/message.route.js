import express from "express";
import { getMessages } from "../controller/message.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getUsersForSidebar } from "../controller/message.controller.js";
import { sendMessage } from "../controller/message.controller.js";

const router=express.Router();
router.get("/users",protectRoute,getUsersForSidebar)
router.get("/:id",protectRoute,getMessages)

router.post("send/:id",protectRoute,sendMessage)
export default router;