import {createContext, useReducer} from "react";
import Reducer from "./Reducer";


export const shoppingContext = createContext(null)

const initialValue = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false
}

const ShopContext = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialValue)

    state.addToBasket = (item) => {
        dispatch({type: 'ADD_TO_BASKET', payload: item})
    }
    state.incrementQuantity = (itemId) => {
        dispatch({type: 'INCREMENT_QUANTITY', payload: {id: itemId}})
    }
    state.decrementQuantity = (itemId) => {
        dispatch({type: 'DECREMENT_QUANTITY', payload: {id: itemId}})
    }
    state.handleBasketShow = () => {
        dispatch({type: 'HANDLE_BASKET_SHOW'})
    }
    state.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }
    state.setGoods = (data) => {
        dispatch({type: 'SET_GOODS', payload: data})
    }


    return (
        <shoppingContext.Provider value={state}>
            {children}
        </shoppingContext.Provider>
    )
}
export default ShopContext