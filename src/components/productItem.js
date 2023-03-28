import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getProductId } from '../features/products/productAction';
 
export default function ProductItem() {
  const {productId} = useParams();
  const dispatch  = useDispatch();
  const {product, isFetchProductID} = useSelector((state)=>state.products)
  let fetchMount = true;
  useEffect(()=>{
    if(fetchMount)  dispatch(getProductId(productId))
    //unmount
    return ()=>fetchMount = false;
  },[])
  if(isFetchProductID) return <div>Loading...!</div>
  return (
    <div>
      <img alt="" src={product.image} style={{width:100,height:100}} /><br/>
      <span>Id: {productId}</span><br/>
      <span>Title: {product.title}</span><br />
      <span>Price: {product.price}</span><br />
      <Link to={"/"}>Back Home</Link>
    </div>
  )
}
