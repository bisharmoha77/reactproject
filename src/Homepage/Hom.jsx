function Header(){
    return(
        <>
         <div className="md:flex md:justify-between px-20 pt-8 bg-blue-300 shadow-xl h-20 hidden " >
            <h1 className="text-2xl font-bold text-orange-500 ">Header</h1>
            <ul className="flex gap-10">
        <li>Home</li>
        <li>Contact</li>
        <li>Product</li>
            </ul>
        </div>
        </>
    )
}
export default Header