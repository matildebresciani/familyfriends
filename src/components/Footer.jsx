import { FiHome, FiUser, FiMessageCircle, FiStar } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
    return ( 
        <footer className="flex items-center justify-evenly py-4 sticky bottom-0 bg-white text-grey">
            <FiHome className="text-primary-color"></FiHome>
            <FiStar></FiStar>
            <FiMessageCircle></FiMessageCircle>
            <FiUser></FiUser>
        </footer>
     );
}
 
export default Footer;