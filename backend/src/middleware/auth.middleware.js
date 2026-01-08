const authMiddleware = (req, res, next) => {
    // Dummy user
    req.user = { id: "user_1" };
    next();
};

export default authMiddleware