import express from 'express'
import notificationRoutes from "./routes/notification.routes.js"
import authMiddleware from "./middleware/auth.middleware.js"

const app = express()

app.use(express.json())

app.use(authMiddleware)
app.use("/api/notifications", notificationRoutes)

export default app