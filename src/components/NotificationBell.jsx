"use client";
import { FiBell } from "react-icons/fi";
import { MdNotifications, MdNotificationsActive } from "react-icons/md";
import useStore from "@/app/store/notificationStore";

const NotificationBell = () => {
    const { messages } = useStore();
    console.log("Bell: ", messages)
    return (     
        // <div>
        //     {messages > 0 ? <MdNotificationsActive /> : <MdNotifications />}
        // </div>
        <div className="relative">
            <FiBell size={24} className="text-black" />
            {messages > 0 ? <div className="absolute -top-1 right-0 w-3 h-3 bg-primary-color rounded-full border-2 border-white"></div> : ""}
        </div>
          
        );
}
 
export default NotificationBell;