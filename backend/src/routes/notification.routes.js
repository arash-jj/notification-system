import express from "express";
import {
    getNotifications,
    markAllAsRead,
    markAsRead,
} from "../controllers/notification.controller.js";

const router = express.Router()

router.get("/", getNotifications)
router.patch("/:id/read", markAsRead)
router.patch("/:id/read-all", markAllAsRead)

export default router
