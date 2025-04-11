import CategoryBtn from "./CategoryBtn";

const Categories = () => {
    return ( 
        <div className="flex gap-4 my-4 overflow-x-auto">
            <CategoryBtn>Alle</CategoryBtn>
            <CategoryBtn>Hunde</CategoryBtn>
            <CategoryBtn>Katte</CategoryBtn>
            <CategoryBtn>Kaniner</CategoryBtn>
        </div>
     );
}
 
export default Categories;