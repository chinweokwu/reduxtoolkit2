import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate  } from 'react-router-dom';
import { postUpdateProduct } from './productSlice';
 
export default function ProductEdit() {
  //Get Params productId từ URL
  const {productId} = useParams();
  const navigate = useNavigate();
  const dispatch  = useDispatch();
  const {products,loading} = useSelector((state)=>state.products)
  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");
  const [price,setPrice] = useState(0);
  useEffect(()=>{
    products.map(item=>{
        if(item.id === productId){
            setTitle(item.title)
            setImage(item.image)
            setPrice(item.price)
        }
    })
  },[loading])
 
  const update_product = async ()=>{
     let product = {
        id:productId,
        title:title,
        image:image,
        price:price
     }
     console.log(product)
     //dispatch action postUpdateProduct từ createAsyncThunk
    await dispatch(postUpdateProduct(product))
    navigate(`/products/${productId}`);
  }
  if(loading) return <div>Loading...!</div>
  return (
    <div>
        <h1>Update Product</h1>
        <input type="text" name="title" value={title} placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/> <br/>
        <input type="text" name="image" value={image} placeholder="Link Image" onChange={(e)=>setImage(e.target.value)}/><br/>
        <input type="price" name="price" value={price} placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/><br/>
        <button onClick ={()=>update_product()}>Update Product</button>
    </div>
  )
}
