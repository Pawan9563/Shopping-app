import {NavBar} from '../../components/NavBar/index'
import {useState, useEffect} from 'react'
import {getAllProducts} from '../../apis/getProducts'
import {ProductCard} from '../../ProductCard/index'
export const Home = () =>{
    const [products,setProducts] = useState([]);
    useEffect(() => {
        (async () =>{
            const data = await getAllProducts()
            setProducts(data);
        })()
    },[])


    return(
        <>
            <NavBar/>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((p) => (
                <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </>
    )
}