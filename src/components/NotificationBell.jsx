"use client";
import { FiBell } from "react-icons/fi";
import useStore from "@/app/store/notificationStore";

const NotificationBell = () => {
    const { message } = useStore();
    console.log("Bell: ", message)
    return (     <div className="relative">
            <FiBell size={24} className="text-black" />
            <div className="absolute -top-1 right-0 w-3 h-3 bg-primary-color rounded-full border-2 border-white"></div> {/* Rød indikator */}
          </div> );
}
 
export default NotificationBell;