import { useState } from "react";


export default function Products(){

    const [products , setProducts] = useState([]);


    async function getProducts(){
        const response = await fetch("https://83wp9k-3000.csb.app/getProducts");
        const reponseJson = await response.json();
        setProducts(responseJson);

    }

    return <>

        
    
    </>
}