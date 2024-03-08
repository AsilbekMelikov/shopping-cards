

const BasketModalItem = (props) => {
    const {id, name, price, quantity, removeFromBasket, incrementQuantity, decrementQuantity} = props
    let totalCost = price * quantity

    return (
        <li className='collection-item'>
            {name} x {quantity} = {totalCost}<b>$</b>
            <span className='secondary-content'>
                <i className='material-icons basket-add' onClick={() => incrementQuantity(id)}>add</i>
                <i className='material-icons basket-remove' onClick={() => decrementQuantity(id)}>remove</i>
                <i className='material-icons basket-delete' onClick={() => removeFromBasket(id)}>delete_forever</i>
            </span>
        </li>
    )
}

export default BasketModalItem