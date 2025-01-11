import { useReducer } from "react"
import { cartReducer, cartInitialState } from "../reducers/cart"

export const useCartReducer = () => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product) => dispatch(
        {
            type: 'ADD_TO_CART',
            payload: product
        }
    )

    const removeFromCart = (product) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const cleanCart = () => dispatch({
        type: 'CLEAN_CART'
    })

    return {
        state,
        addToCart,
        cleanCart,
        removeFromCart
    }
}