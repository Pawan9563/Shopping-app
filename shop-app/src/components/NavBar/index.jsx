
export const NavBar = () => {
    return(
        <>
            <header className="bg-green-900 h-16 flex text-white">
                <h1 className="flex items-center text-3xl pl-5">QuickKart</h1>
                <nav className="ml-auto flex gap-3 items-center pr-5">
                    <span><button className="material-symbols-outlined">favorite</button></span>
                    <span><button className="material-symbols-outlined">shopping_cart</button></span>
                    <span><button className="material-symbols-outlined">account_circle</button></span>
                </nav>
            </header>
        </>
    )
}