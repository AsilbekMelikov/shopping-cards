import './App.css';
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Shop from "./Layout/Shop";
import {ToastContainer} from "react-toastify";
import {useEffect} from "react";

function App() {

  return (
      <div>
        <ToastContainer/>
        <Header />
          <Shop />
        <Footer />
      </div>

  );
}

export default App;
