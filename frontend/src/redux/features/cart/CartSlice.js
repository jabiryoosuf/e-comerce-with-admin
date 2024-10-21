import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.5,
  grandTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action)=>{
        const isExist = state.products.find(products=>products.id=== action.payload.id)
        if(!isExist){
            state.products.push({})
        }
    },
  },
});
