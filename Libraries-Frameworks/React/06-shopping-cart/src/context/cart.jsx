import { createContext } from "react"
import { useCartReducer } from "../hooks/useCartReducer.js"

export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const { state, addToCart, cleanCart, removeFromCart } = useCartReducer()
    
    return (
        <CartContext.Provider value={
            {
                cart: state,
                addToCart,
                cleanCart,
                removeFromCart
            }
        }>
            {children}
        </CartContext.Provider>
    )
}