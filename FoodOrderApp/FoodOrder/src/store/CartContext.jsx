import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {

  if (action.type === "ADD_ITEM") {

    const existingCartItemindex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    
    const updatedItems = [...state.items];


    if (existingCartItemindex > -1) {

      const existingItem = state.items[existingCartItemindex];

      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      
      updatedItems[existingCartItemindex] = updatedItem;
    
    } else {
    
        updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, itmes: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    // ... remove an item from the state
  }

  return state;
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
