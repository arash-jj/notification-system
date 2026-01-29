import express from 'express'
import notificationRoutes from "./routes/notification.routes.js"
import authMiddleware from "./middleware/auth.middleware.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use(authMiddleware)
app.use("/api/notifications", notificationRoutes)

export default app