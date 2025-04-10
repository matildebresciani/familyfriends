const TagBtn = ({children, variant}) => {
    const variants = {
        blue: "bg-blue-light text-blue-dark",
        pink: "bg-pink-light text-pink-dark",
        green: "bg-green-light text-green-dark",
        yellow: "bg-yellow-light text-yellow-dark",
      };
    return ( <div className={`py-2 px-4 rounded-full shrink-0 ${variants[variant]}`}>
        {children}
    </div> );
}
 
export default TagBtn;