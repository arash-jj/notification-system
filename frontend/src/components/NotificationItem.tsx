import { cn } from "@/lib/utils"

type Props = {
    notification : {
        userId: String,
        type: String,
        message: String,
        isRead: Boolean
    },
    onRead: () =>  void
}

const NotificationItem = ({notification, onRead} : Props) => {
    return (
        <div
        className={cn('p-3 rounded-md bg-muted', { 'bg-primary/10' : notification.isRead})}
        onClick={onRead}
        >
            <p className="text-sm">
                {notification.message}
            </p>
        </div>
    )
}

export default NotificationItem