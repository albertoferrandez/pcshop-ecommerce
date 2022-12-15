import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cant: 0,
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
      state.cantTotal++;
    }
  }
},
)

export const { addtoCart } = cartSlice.actions

export default cartSlice.reducer