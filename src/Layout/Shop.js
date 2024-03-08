import {useEffect, useState} from "react";
// import {API_KEY, API_URL} from "../config";
import Loader from "../Components/Loader";
import GoodsList from "../Components/GoodsList";
import Cart from "../Components/Cart";
import BasketModal from "../Components/BasketModal";
import {toast} from "react-toastify";

const Shop = () => {
    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)



    const addToBasket = (item) => {
        toast.success('Goods added to basket successfully')

        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }

            setOrder([...order, newItem])

        }
        else {
            const newOrder = order.map((orderItem, index) => {

                if (index === itemIndex) {
                    return  {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }

                }
                else {
                    return orderItem
                }

            })
            return setOrder(newOrder)
        }

    }

    const removeFromBasket = (itemId) => {
        toast.error('Goods deleted from baskets successfully')

        const newOrder = order.filter(orderItem => orderItem.id !== itemId)
        return setOrder(newOrder)

    }

    const incrementQuantity = (itemId) =>{
        toast.success('The number of goods increased')
        const newOrder = order.map(orderItem  => {
            if (orderItem.id === itemId) {
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
        setOrder(newOrder)
    }

    const decrementQuantity = (itemId) => {
        toast.warn('The number of goods reduced')

         order.map(orderItem  => {
             if (orderItem.id === itemId) {
                 const newQuantity = orderItem.quantity - 1

                if (newQuantity > 0) {
                   return setOrder([{...orderItem, quantity: newQuantity}])
                }
                else {
                    const deletedItem = order.filter(orderItem => orderItem.id !== itemId)
                  return setOrder(deletedItem)
                }

             }
             else {
                 return setOrder(orderItem)
             }
         })
    }



    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    if (isBasketShow) {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = ''
    }


    useEffect(() => {
        fetch('http://localhost:3000/weapons')
            .then(response => response.json())
            .then(data => setGoods(data))

        setLoading(false)
    }, []);


    // useEffect(() => {
    //     fetch(API_URL, {
    //         headers: {
    //             'Authorization': API_KEY
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => data.shop && setGoods(data.shop))
    //
    //     setLoading(false)
    // }, []);


    return (
        <div className='container content'>
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {loading ? <Loader /> : <GoodsList goods={goods}
                                               addToBasket={addToBasket}
                                               order = {order}
                                               incrementQuantity = {incrementQuantity}
                                               decrementQuantity = {decrementQuantity}/>}

            {isBasketShow && <BasketModal order={order}
                                          handleBasketShow={handleBasketShow}
                                          removeFromBasket ={removeFromBasket}
                                          incrementQuantity = {incrementQuantity}
                                          decrementQuantity = {decrementQuantity}/>}
        </div>
    )
}
export default Shop