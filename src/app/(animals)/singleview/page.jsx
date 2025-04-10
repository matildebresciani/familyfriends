import PetImg from "@/components/singleview_components/PetImg";
import AdoptBtn from "@/components/singleview_components/AdoptBtn";
import TagBtn from "@/components/singleview_components/TagBtn";

const Singleview = () => {
    return ( 
        <div className="m-4">
            <PetImg></PetImg>
            <h1 className="text-3xl font-medium mt-4">Samojed Willie</h1>
            <div className="flex gap-2 flex-wrap my-4">
                <TagBtn variant="blue">Dog</TagBtn>
                <TagBtn variant="pink">Male</TagBtn>
                <TagBtn variant="green">Young</TagBtn>
                <TagBtn variant="yellow">Great Dane</TagBtn>
            </div>
            <p className="text-black text-lg font-light">Den venligste Samojed, vi nogensinde har mødt. Elsker at lege med bolde og er venlig over for andre dyr. På trods af sin hvide pels elsker den regn og vandpytter. 
            </p>
            <p className="text-grey font-light mt-2">Opdateret den 13. juli.</p>
            <AdoptBtn></AdoptBtn>
        </div>
     );
}
 
export default Singleview;