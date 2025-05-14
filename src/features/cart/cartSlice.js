import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        // add(state, action){
        //     state.cart = [...state.cart, action.payload]     
        // },
        // add(state, action) {
        //     const existingItem = state.cart.find(item => item.id === action.payload.id);
        //     if (existingItem) {
        //       existingItem.quantity += 1; // increase quantity
        //     } else {
        //       state.cart.push({ ...action.payload, quantity: 1 });
        //     }
        //   },
        // removeItem(state, action){
        //     state.cart = state.cart.filter(cap=>cap.id !== action.payload)
        // }
        add(state, action) {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (!existingItem) {
              state.cart.push({ ...action.payload });
            }
          },
        removeItem(state, action){
            state.cart = state.cart.filter(cap=>cap.id !== action.payload)
        },
        increaseItemQuantity(state, action){
            const item = state.cart.find(item => item.id === action.payload.id);
            item.quantity++;
            item.price = item.quantity * item.unitPrice
        
        },
        decreaseItemQuantity(state, action){
            const item = state.cart.find(item => item.id === action.payload.id);
            if(item.quantity === 1) return
            item.quantity--
            item.price = item.quantity * item.unitPrice
        },
        clearCartItems(state){
            state.cart = []
        }
    }
})
export const {add, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCartItems} = cartSlice.actions
export default cartSlice.reducer
export const getNumOfCart = (state) => state.cart.cart.length 
export const getCart = (state) => state.cart.cart
export const getTotalPrice = state=>state.cart.cart.reduce((acc, item)=>item.price + acc, 0)
export const getTotalItems = state=>state.cart.cart.reduce((acc, item)=>item.quantity + acc, 0)