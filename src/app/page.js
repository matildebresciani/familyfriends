import Image from "next/image";
import Categories from "@/components/Categories";
import PetList from "@/components/PetList";
import RemoteImg from "@/components/RemoteImg";

export default async function Home() {
  const data = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  });
  const animals = await data.json();
  console.log(animals);
  return (
    <div>
      <Categories></Categories>
      <PetList></PetList>
    </div>
  );
}
