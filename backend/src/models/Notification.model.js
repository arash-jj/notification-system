import mongoose from "mongoose";

const notificationSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            require: true,
            index: true
        },
        type: {
            type : String,
            require : true
        },
        message: {
            type: String,
            require: true
        },
        isRead: {
            type: Boolean,
            default: false
        },
        
    }, { timestamps: true }
)
export default 
mongoose.model("Notifications", notificationSchema)