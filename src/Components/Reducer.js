import {toast} from "react-toastify";


const Reducer = (state, {type, payload}) => {

    switch (type) {
        case 'ADD_TO_BASKET':
         {
                const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id)

                let newOrder = null
                if (itemIndex < 0) {
                     newOrder = {
                        ...payload,
                        quantity: 1
                    }
                    newOrder = [...state.order, newOrder]
                }
                toast.success('Goods added to basket successfully')
                return {
                    ...state,
                    order: newOrder
                }

            }
        case 'INCREMENT_QUANTITY':
        return {
            ...state,
            order: state.order.map(orderItem  => {
                if (orderItem.id === payload.id) {
                    toast.success('The number of goods increased')
                    const newQuantity = orderItem.quantity + 1
                    return {
                        ...orderItem,
                        quantity: newQuantity
                    }
                }
                else {
                    return orderItem
                }
            })
        }
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map(orderItem => {
                    if (orderItem.id === payload.id) {
                        const newQuantity = orderItem.quantity - 1

                        if (newQuantity > 0) {
                            toast.warn('The number of goods reduced')
                            return {
                                ...orderItem,
                                quantity: newQuantity
                            }
                        }
                        else {
                            return orderItem
                        }
                    }
                    else {
                        return orderItem
                    }
                })
            }
        case 'HANDLE_BASKET_SHOW':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        case 'REMOVE_FROM_BASKET':

            toast.error('Goods deleted from baskets completely')
            return {
                ...state,
                order: state.order.filter(orderItem => orderItem.id !== payload.id)
            }
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        default:
            return state

    }
}
export default Reducer