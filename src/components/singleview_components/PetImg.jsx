import Breed from "./Breed";
import FavoriteBtn from "../FavoriteBtn";
import Image from "next/image";
import Arrow from "./Arrow";


const PetImg = () => {
    return ( <div className="relative">
          <Image
            src="https://dbw3zep4prcju.cloudfront.net/animal/425595d9-7162-4204-b1d3-25a3db9bf9b4/image/3f16c88c-9364-45db-a5a2-3c0f0f2978f2.jpg?versionId=6iNs4nnLdLC8mQ2cdTd.zSrdHiH7zD9K&bust=1744096050&width=300"
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
                <Breed></Breed>
            </div>
    </div> );
}
 
export default PetImg;