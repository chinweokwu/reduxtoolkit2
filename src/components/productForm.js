import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { postAddProduct } from '../features/products/productAction';
 
export default function ProductForm() {
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");
  const [price,setPrice] = useState(0);
  const add_product = async ()=>{
     let product = {
        title:title,
        image:image,
        price:price
     }
     console.log(product)
     //dispatch action postAddProduct từ createAsyncThunk
    await dispatch(postAddProduct(product))
    navigate(`/products`);
  }
  return (
    <div>
        <h1>New Product</h1>
        <input type="text" name="title" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/> <br/>
        <input type="text" name="image" placeholder="Link Image" onChange={(e)=>setImage(e.target.value)}/><br/>
        <input type="price" name="price" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/><br/>
        <button onClick ={()=>add_product()}>Send Form</button>
    </div>
  )
}
