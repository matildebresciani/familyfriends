"use client";

import FavoriteBtn from "./FavoriteBtn";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const Card = ({animal}) => {
    const imageUrl = animal.photos?.[0]?.medium || "/img/placeholder.webp";
    return ( 
        
        <Link href={`/singleview/${animal.id}`}>
        <li className=" rounded-2xl shadow-lg break-inside-avoid cursor-pointer mb-4">
            <div className="relative">
                <Image
                src={imageUrl}
                alt={`Billede af ${animal.name}`}
                width={300}
                height={200}
                className="rounded-2xl object-cover aspect-[3/2]" />
                <div className="absolute top-2 right-2">
                    <FavoriteBtn></FavoriteBtn>
                </div>
            </div>
            <div className="flex flex-col px-4 py-3">
                <div className="flex flex-row justify-between items-end">
                    <h3 className="text-2xl font-medium text-black wrap-break-word max-w-3/4">{animal.name}</h3>
                    <p className="text-grey">{animal.age}</p>
                </div>
                <p className="text-grey max-w-[50%] leading-tight mt-1">{animal.breeds?.primary}</p>
            </div>
        </li>
        </Link>
     );
}
 
export default Card;