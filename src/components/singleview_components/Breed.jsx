import Image from "next/image";

const Breed = ({breed}) => {
    return (
    <div className="flex items-start gap-2 text-white bg-gray-200/30 backdrop-blur-xs p-2 rounded-2xl">
        <Image
        src="https://dbw3zep4prcju.cloudfront.net/animal/425595d9-7162-4204-b1d3-25a3db9bf9b4/image/3f16c88c-9364-45db-a5a2-3c0f0f2978f2.jpg?versionId=6iNs4nnLdLC8mQ2cdTd.zSrdHiH7zD9K&bust=1744096050&width=300"
        alt="Kategori billede"
        width={40}
        height={40}
        className="rounded-lg">
        </Image>
        <p className="font-light">{breed}</p>
    </div> );
}
 
export default Breed;