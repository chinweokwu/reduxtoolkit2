import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts, postDeleteProduct } from '../features/products/productAction';
 
export default function ProductsList() {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products)
    let fetchMount = true;
    useEffect(() => {
        if(fetchMount){
            dispatch(getProducts())
        }
        return ()=>{
            fetchMount = false;
        }
    }, [])
 
  if(loading) return <div>Loading...</div>
  return (
    <div>
        <h2>All Products</h2>
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <Link to={`/products/${product.id}`} style={{fontSize:20}}>{product.title}</Link>---
                    [<span style={{color:"red",cursor:"pointer"}} onClick={()=>dispatch(postDeleteProduct(product))}>Delete</span>
                    |
                    <Link to={`/products/${product.id}/edit`} style={{color:"green",cursor:"pointer"}}>Edit</Link>]
                </li>
            ))}
        </ul>
        <br/>
        <Link to={`/products/new`} style={{backgroundColor:'blue',color:"#fff",padding:5}}>Add Product</Link>
    </div>
  )
}
