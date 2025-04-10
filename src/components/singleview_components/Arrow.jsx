import { FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

const Arrow = () => {
    return ( 
    <Link href="/">
    <div className="bg-gray-100 rounded-full p-1.5">
        <FiChevronLeft size={24} />
    </div> 
    </Link>
    );
}
 
export default Arrow;