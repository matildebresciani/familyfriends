import Card from "./Card";

const PetList = ({data}) => {

    return ( 
        <div className="columns-2 gap-4 m-4 space-y-4">
            {data.animals.map((animal) => (
                <Card key={animal.id} animal={animal}></Card>
            ))}
        
        </div>
     );
}
 
export default PetList;