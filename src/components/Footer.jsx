"use client";

import { FiHome, FiUser, FiMessageCircle, FiStar } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="flex items-center justify-evenly py-4 sticky bottom-0 bg-white/80 backdrop-blur-sm text-grey">
            <Link href="/">
                <FiHome className="text-primary-color"></FiHome>
            </Link>
            <Link href="/favorites">
                <FiStar></FiStar>
            </Link>
            <Link href="/">
            <FiMessageCircle></FiMessageCircle>
            </Link>
            <Link href="/">
            <FiUser></FiUser>
            </Link>
            
            
            
            
        </footer>
     );
}
 
export default Footer;