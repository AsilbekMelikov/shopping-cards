import { useContext, useEffect } from "react";
// import {API_KEY, API_URL} from "../config";
import Loader from "../Components/Loader";
import GoodsList from "../Components/GoodsList";
import Cart from "../Components/Cart";
import BasketModal from "../Components/BasketModal";
import { shoppingContext } from "../Components/ShopContext";
import { weapons } from "../constants/data";

const Shop = () => {
  const { loading, isBasketShow, setGoods } = useContext(shoppingContext);

  if (isBasketShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  useEffect(() => {
    setGoods(weapons);

    // eslint-disable-next-line
  }, []);

  return (
    <div className="container content">
      <Cart />
      {loading ? <Loader /> : <GoodsList />}
      {isBasketShow && <BasketModal />}
    </div>
  );
};
export default Shop;
