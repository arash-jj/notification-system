export const fetchNotifications = async (id?: String) => {
    const res = await fetch(`http://localhost:5500/api/notifications?userId=${id}`);
    return res.json()
};

export const markAsRead = async (id: string) => {
    await fetch(`http://localhost:5500/api/notofications/${id}/read`, { method: "PATCH" });
};