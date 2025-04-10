"use client";

import FavoriteBtn from "./FavoriteBtn";
import Image from "next/image";

const Card = ({animal}) => {
    return ( 
        <div className=" rounded-2xl shadow-lg break-inside-avoid">
            <div className="relative">
                <Image
                src="https://dbw3zep4prcju.cloudfront.net/animal/425595d9-7162-4204-b1d3-25a3db9bf9b4/image/3f16c88c-9364-45db-a5a2-3c0f0f2978f2.jpg?versionId=6iNs4nnLdLC8mQ2cdTd.zSrdHiH7zD9K&bust=1744096050&width=300"
                alt="Billede af kæledyr"
                width={300}
                height={200}
                className="rounded-2xl object-cover aspect-[3/2]" />
                <div className="absolute top-2 right-2">
                    <FavoriteBtn></FavoriteBtn>
                </div>
            </div>
            <div className="flex flex-col px-4 py-3">
                <div className="flex flex-row justify-between items-end">
                    <h3 className="text-2xl font-medium text-black">{animal.name}</h3>
                    <p className="text-grey">{animal.age}</p>
                </div>
                <p className="text-grey max-w-[50%] leading-tight mt-1">{animal.breeds?.primary}</p>
            </div>
        </div>
     );
}
 
export default Card;