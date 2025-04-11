import Breed from "./Breed";
import FavoriteBtn from "../FavoriteBtn";
import Image from "next/image";
import Arrow from "./Arrow";


const PetImg = ({image, breed}) => {
    return ( <div className="relative">
          <Image
            src={image}
            alt="Billede af kæledyr"
            width={500}
            height={500}
            className="rounded-2xl object-cover" />
            <div className="absolute top-5 right-5">
            <FavoriteBtn></FavoriteBtn>
            </div>
            <div className="absolute top-5 left-5">
                <Arrow></Arrow>
            </div>
            <div className="absolute bottom-5 left-5">
                <Breed>{breed}</Breed>
            </div>
    </div> );
}
 
export default PetImg;