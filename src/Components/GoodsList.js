import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
    const {goods =[], addToBasket, order, incrementQuantity, decrementQuantity} = props

    if (!goods) {
        return (
            <h1>Nothing found here</h1>
        )
    }


    return (
        <div className='goods'>
            {goods.map(item => <GoodsItem
                key={item.id}
                {...item}
                {...item.stats}
                addToBasket={addToBasket}
                order = {order}
                incrementQuantity = {incrementQuantity}
                decrementQuantity = {decrementQuantity}
            />)}
        </div>
    )

    // return (
    //     <div className='goods'>
    //         {goods.map(item => <GoodsItem
    //             key={item.mainId}
    //             {...item}
    //             price = {item.price.regularPrice}
    //             description = {item.granted[0].description}
    //             full_background = {item.displayAssets[0].full_background}
    //             addToBasket = {addToBasket}
    //         />)}
    //     </div>
    // )
}
export default GoodsList