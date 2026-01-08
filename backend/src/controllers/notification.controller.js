import Notification from "../models/Notification.js";

export const getNotifications = async (req, res) => {
    const notifications = await Notification.find({
        userId: req.user.id
    }).sort({ createAt: -1 });
    res.status(200).json(notifications);
};
export const markAsRead = async (req, res) => {
    const { id } = req.params;
    await Notification.findByIdAndUpdate(id,{
        isRead: true,
    });
    res.status(200).json({ success: true });
};
export const markAllAsRead = async (req, res) => {
    await Notification.updateMany({ userId: req.user.id }, { isRead: true });
    res.status(200).json({ success: true });
};
