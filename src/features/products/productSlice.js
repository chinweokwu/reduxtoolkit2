import {
  getProductId,
  getProducts, 
  postAddProduct,
  postUpdateProduct,
  postDeleteProduct
} from "./productActions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading:false,
  products:[],
  isFetchProductID:false,
  product:{}
};

export const productSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {},
   extraReducers: {
 
     //set get all product
     [getProducts.pending]: (state) => {
       state.loading = true
     },
     [getProducts.fulfilled]: (state, { payload }) => {
       state.loading = false
       state.products = payload
     },
     [getProducts.rejected]: (state) => {
       state.loading = false
     },
 
     //set get product Id
     [getProductId.pending]: (state) => {
       state.isFetchProductID = true
     },
     [getProductId.fulfilled]: (state, { payload }) => {
       state.isFetchProductID = false
       state.product = payload
     },
     [getProductId.rejected]: (state) => {
       state.isFetchProductID = false
     },
      
     //set post Product
     [postAddProduct.fulfilled]:(state,{payload})=>{
        state.products.push(payload);
     },
 
     //set update Product
     [postUpdateProduct.fulfilled]:(state,{payload})=>{
       const index = state.products.findIndex(product => product.id === payload.id);
       //console.log(index)
      // console.log(payload)
       state.products[index] = payload;
     },
 
      //set delete Product
      [postDeleteProduct.fulfilled]:(state,{payload})=>{
       const index = state.products.findIndex(product => product.id === payload.id);
       state.products.splice(index, 1);
     }
 
   },
 });

