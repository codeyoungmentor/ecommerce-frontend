import axios from "axios";
import { useEffect, useState } from "react";


export default function Products(){

    const [products , setProducts] = useState([]);


    async function getProducts(){
        const response = await axios({
            url:"https://014398b2-1e27-4446-863c-1a39efaa1465-00-1keb4tassksfq.worf.replit.dev/getProducts",
            method:"get",
        })
        console.log(response)
        setProducts(response.data)

    }

    useEffect(()=>{
        getProducts()
    },[])

    return <>

        {products.map((product)=>{
            return <div>
                    <img width={200} src={product.img}/>  
                    <p> {product.id}</p> 
                    <h1> {product.name}</h1> 
                    <p> {product.description}</p> 
                    <p> Rs : {product.price}</p> 

                </div>
        })}
        
    
    </>
}