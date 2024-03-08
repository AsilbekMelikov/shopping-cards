import React from 'react';

function ChangeButton(props) {
    const {addToBasket, id, name, price, order, incrementQuantity, decrementQuantity} = props

    const itemIndex = order.findIndex(orderItem => orderItem.id === id)

    const quantity =  order.map(orderItem => {
            if (orderItem.id === id) {
                return orderItem.quantity
            }
            else {
                return 0
            }
        })

    return (
        <>
            {itemIndex < 0 ?
            (
                <button className='btn initial-button' onClick={() => addToBasket({id, name, price})}>Buy</button>
            ) : (
            <button className='btn container-button'>
                <div className='item-add'>
                    <i className='material-icons' onClick={() => incrementQuantity(id)}>add</i>
                </div>
                {quantity}
                <div className='item-remove'>
                    <i className='material-icons' onClick={() => decrementQuantity(id)}>remove</i>
                </div>
            </button>)}
        </>
    );
}

export default ChangeButton;