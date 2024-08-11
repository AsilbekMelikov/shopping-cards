import GoodsItem from "./GoodsItem";
import {useContext} from "react";
import {shoppingContext} from "./ShopContext";

const GoodsList = () => {

    const {goods = []} = useContext(shoppingContext)

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