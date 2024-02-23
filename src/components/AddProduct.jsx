

export default function AddProducts(){


    async function addNewProduct(){
        const response = await fetch("https://83wp9k-3000.csb.app/addProduct" , {
            method:"POST" , 

        });
        const reponseJson = await response.json();

        
    }

    return <>

        <input />
        <input />
    
    </>
}