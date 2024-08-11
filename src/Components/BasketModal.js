import BasketModalItem from "./BasketModalItem";
import {useContext} from "react";
import {shoppingContext} from "./ShopContext";


const BasketModal = () => {

    const {order, handleBasketShow} = useContext(shoppingContext)

    const totalCost = order.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)


    return (
        <div className='basket-modal'>
            <ul className='collection basket-lists'>
                <li className='collection-item active'>
                    Basket
                </li>
                {order.length ? order.map(item => <BasketModalItem key ={item.id} {...item} {...item.stats}
                    />)
                    : <li className='collection-item'>Basket is empty</li>}
                <li className='collection-item active'>Total cost: {totalCost} <b>$</b> </li>
                <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
            </ul>
        </div>
    )
}
export default BasketModal