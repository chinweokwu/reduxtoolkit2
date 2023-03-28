import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts  = createAsyncThunk(
  'products/getProducts',
  async (thunkAPI) => {
    //call api
    const res = await fetch('https://5adc8779b80f490014fb883.mockapi.io/products').then(
    (data) => data.json()
  )
  return res
})


export const getProductId = createAsyncThunk(
  'products/getProductId',
  async (productId, { dispatch }) => {
    const response = await fetch(`https://5adc8779b80f490014fb883.mockapi.io/products/${productId}`).then(
      (data) => data.json()
    )
    const finalPayload = response
    return finalPayload; // will dispatch `fulfilled` action
  }
);



export const postAddProduct = createAsyncThunk(
  'products/postAddProduct',
  async (product, { dispatch }) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };
    const response = await fetch(`https://5adc8779b80f490014fb883.mockapi.io/products`,requestOptions).then(
        (data) => data.json()
    )
    const finalPayload = response
    return finalPayload;
   }
)

export const postUpdateProduct = createAsyncThunk(
  'products/postUpdateProduct',
  async (product, { dispatch }) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };
    const response =  await fetch(`https://5adc8779b80f490014fb883.mockapi.io/products/${product.id}`,requestOptions).then(
        (data) => data.json()
    )
    const finalPayload = response
    return finalPayload;
   }
)

export const postDeleteProduct = createAsyncThunk(
  'products/postDeleteProduct',
  async (product, { dispatch }) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };
    const response =  await fetch(`https://5adc8779b80f490014fb883.mockapi.io/products/${product.id}`,requestOptions).then(
        (data) => data.json()
    )
    const finalPayload = response
    return finalPayload;
   }
)
