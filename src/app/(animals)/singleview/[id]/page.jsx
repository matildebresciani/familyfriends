import PetImg from "@/components/singleview_components/PetImg";
import AdoptBtn from "@/components/singleview_components/AdoptBtn";
import TagBtn from "@/components/singleview_components/TagBtn";

export default async function Page({ params }) {
    const { id } = await params;
    const res = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      }
    });
  
    const { animal } = await res.json();
    const imageUrl = animal.photos?.[0]?.medium || "/img/placeholder.jpg";

    return <div className="m-4">
      <PetImg image={imageUrl} breed={animal.breeds.primary}></PetImg>
      <h1 className="text-3xl font-medium mt-4">{animal.name}</h1>
      <div className="flex gap-2 flex-wrap my-4">
          <TagBtn variant="blue">{animal.type}</TagBtn>
          <TagBtn variant="pink">{animal.gender}</TagBtn>
          <TagBtn variant="green">{animal.age}</TagBtn>
          <TagBtn variant="yellow">{animal.breeds.primary}</TagBtn>
      </div>
      <p className="text-black text-lg font-light"> {animal.description} 
      </p>
      <p className="text-grey font-light mt-2">Opdateret den {new Date(animal.status_changed_at).toLocaleDateString("da-DK")}</p>
      <AdoptBtn></AdoptBtn>
    </div>
  }