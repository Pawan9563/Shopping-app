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
            <div className="flex flex-wrap gap-8 pt-8 justify-center">
                {products.map((p) => (
                <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </>
    )
}