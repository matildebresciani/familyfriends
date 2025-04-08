import CategoryBtn from "./CategoryBtn";

const Categories = () => {
    return ( 
        <div className="flex gap-4 my-4 overflow-x-auto">
            <CategoryBtn></CategoryBtn>
            <CategoryBtn></CategoryBtn>
            <CategoryBtn></CategoryBtn>
            <CategoryBtn></CategoryBtn>
        </div>
     );
}
 
export default Categories;