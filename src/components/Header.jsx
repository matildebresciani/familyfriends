import { FiBell } from "react-icons/fi";

const Header = () => {
    return (
    <header className="flex items-center justify-between font-bold py-4 mx-4">
    <a href="" className="text-xl">FamilyFriends</a>
    <div className="relative">
        <FiBell size={24} className="text-black" />
        <div className="absolute -top-1 right-0 w-3 h-3 bg-primary-color rounded-full border-2 border-white"></div> {/* Rød indikator */}
      </div>
    </header> );
}
 
export default Header;