export const cartInitialState = JSON.parse(window.localStorage.getItem('cart') || '[]')

export const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const {type: actionType, payload: actionPayload} = action
    switch (actionType) {
        case 'ADD_TO_CART':{
            const { id } = actionPayload
            const productInCart = state.findIndex(
                (item) => item.id === id
            )
            if(productInCart >= 0){
                // Forma con structuredClone
                const newCart = structuredClone(state)
                newCart[productInCart].quantity+=1
                updateLocalStorage(newCart)
                return newCart
                // Forma con spread operator
                // const newState = [
                //     ...state.slice(0, productInCart),
                //     {...state[productInCart], quantity: state[productInCart].quantity + 1},
                //     ...state.slice(productInCart + 1)
                // ]
            }
    
            const newState= [...state, {...actionPayload, quantity: 1}]
            updateLocalStorage(newState)
            return newState
        }

        case 'REMOVE_FROM_CART':{
            const { id } = actionPayload
            const newState = state.filter((item) => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }

        case 'CLEAN_CART':{
            updateLocalStorage([])
            return cartInitialState
        }
    }
    return state
}