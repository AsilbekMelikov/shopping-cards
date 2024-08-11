import './App.css';
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Shop from "./Layout/Shop";
import {ToastContainer} from "react-toastify";
import ShopContext from "./Components/ShopContext";

function App() {

  return (
      <div>
        <ToastContainer/>
        <Header />
        <ShopContext>
          <Shop />
        </ShopContext>
        <Footer />
      </div>

  );
}

export default App;
