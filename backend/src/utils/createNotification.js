import Notification from "../models/Notification.model.js";

export const createNotification = async ({ userId, type, message }) => {
    return Notification.create({
        userId, type, message
    })
}