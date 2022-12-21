import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cantTotal: 0,
    precioTotal: 0
  },
  reducers: {
    addtoCart(state, action) {
      const exist = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (exist >= 0) {
        state.cart[exist].cantidad += 1;
      } else {
        const tempProduct = { ...action.payload, cantidad: 1 }
        state.cart.push(tempProduct);
      }
      
      state.cantTotal = state.cart.reduce((acumulador, actual) => acumulador + actual.cantidad, 0);
      
    },

    deletefromCart(state, action) {
      console.log(action.payload.id)
      const deleteItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      )
      state.cart = deleteItem;
    }
  }
},
)

export const { addtoCart, deletefromCart } = cartSlice.actions

export default cartSlice.reducer