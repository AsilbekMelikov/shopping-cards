import ChangeButton from "./ChangeButton";

const GoodsItem = (props) => {
    const {
        id, name, origin, caliber, mag, rof, reload_time, counter_part, movement_speed,
        kill_award, accurate_range, price, image, addToBasket, isButtonShow,
        order, incrementQuantity, decrementQuantity
    } = props

    return (
        <div className='card' id={id}>
            <div className='card-image'>
                <img src={image} alt={name}/>
            </div>
            <div className='card-content'>
                <span className='card-title'>{name.toUpperCase()}</span>
                <p><b>Country:</b> {origin}</p>
                <p><b>Caliber:</b> {caliber}</p>
                <p><b>Magazine:</b> {mag}</p>
                <p><b>Rate of fire:</b> {rof}</p>
                <p><b>Reload time:</b> {reload_time}</p>
                <p><b>Counter part:</b> {counter_part}</p>
                <p><b>Movement speed:</b> {movement_speed}</p>
                <p><b>Kill award:</b> {kill_award}</p>
                <p><b>Accurate range:</b> {accurate_range}</p>
            </div>
            <div className='card-action'>
                <ChangeButton addToBasket = {addToBasket} isButtonShow = {isButtonShow}
                              id = {id} name={name} price={price} order = {order}
                              decrementQuantity = {decrementQuantity} incrementQuantity = {incrementQuantity}
                />
                {/*<button className='btn' onClick={ () => addToBasket({id, name, price})}>Buy</button>*/}
                <div className='right' style={{fontSize: '1.5rem'}}>
                    <span>{price}<b>$</b></span>
                </div>
            </div>
        </div>
    )

    // const {mainId, displayName, description,price, full_background, addToBasket} = props
    //
    // return (
    //     <div className='card' id={mainId}>
    //         <div className='card-image'>
    //             <img src={full_background} alt={displayName}/>
    //         </div>
    //         <div className='card-content'>
    //             <span className='card-title'>{displayName}</span>
    //             <p>{description}</p>
    //         </div>
    //         <div className='card-action'>
    //             <button className='btn' onClick={() => addToBasket({mainId, displayName, price})}>Buy</button>
    //             <div className='right' style={{fontSize: '1.5rem'}}>
    //                 <span> {price}$</span>
    //             </div>
    //         </div>
    //     </div>
    // )
}
export default GoodsItem