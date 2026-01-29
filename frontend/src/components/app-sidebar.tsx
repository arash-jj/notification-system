import { fetchNotifications, markAsRead } from "@/api/notifications"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
} from "@/components/ui/sidebar"
import { useEffect, useState } from "react"
import NotificationItem from "./NotificationItem"


export function AppSidebar() {
    const [items, setItems] = useState<any[]>([])
    useEffect(() => {
        fetchNotifications("user_1").then(setItems)
    }, [])
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                <SidebarGroupLabel className="text-xl mb-1">Notifications</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                    { items && 
                        items.map(n => (
                            <NotificationItem 
                            key={n._id}
                            notification={n}
                            onRead={async () => {
                                await markAsRead(n._id);
                                setItems(prev => prev.map(p => p._id === n._id ? {...p, isRead: true} : p))
                            }}/>
                        ))
                    }
                    </SidebarMenu>
                </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}