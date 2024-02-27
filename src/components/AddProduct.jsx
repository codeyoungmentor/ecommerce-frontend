import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AddProducts(){

    const [id , setId] = useState("")
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    const [price , setPrice] = useState("")
    const [img , setImg] = useState("")

    const navigate = useNavigate();


    async function addNewProduct(){
        try {
            await axios({
                url:"https://014398b2-1e27-4446-863c-1a39efaa1465-00-1keb4tassksfq.worf.replit.dev/addProduct",
                method:"post" , 
                data:{
                    id:id,name:title,description,price,img
                }
            })
            
            alert("Your product has been added") 
        } catch (error) {
            alert("error" + error)
        }


        
    }



    return <>

    { 
    (localStorage.getItem("loggedin") == null)? <button> Signup first </button> :  <div>

    <input onChange={(e)=>{setId(e.target.value)}} value={id} type="text" placeholder="id" />
    <input onChange={(e)=>{setTitle(e.target.value)}} value={title} type="text" placeholder="name" />
    <input onChange={(e)=>{setDescription(e.target.value)}} value={description} type="text" placeholder="description" />
    <input onChange={(e)=>{setPrice(e.target.value)}} value={price} type="text" placeholder="price" />
    <input onChange={(e)=>{setImg(e.target.value)}} value={img} type="text" placeholder="img" />

    <button onClick={addNewProduct}> Submit </button>
</div>

    }

      
    </>
}