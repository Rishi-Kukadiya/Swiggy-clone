import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Fooddeliverycd from "./foodeliverycd";
import { BrowserRouter, Routes, Route} from "react-router";
import Fooddetails from "./Fooddetails";
import Dineout from "./dineout";
import Booktabel from "./Booktable";
import Signup from "./Signup";
import DisDineout from "./DiscoverDineout";
import AddToCart from "./AddToCart";
import {Provider} from "react-redux";
import store from "../redux/store";
function App(){
    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/resturant" element={<Fooddeliverycd></Fooddeliverycd>}></Route>
              <Route path="/fooddetails/:collectionId" element={<Fooddetails></Fooddetails>}></Route>
              <Route path="/dineout" element={<Dineout></Dineout>}></Route>
              <Route path="/dineout/booktable/:RestID" element={<Booktabel></Booktabel>}></Route>
              <Route path="/dineout/:RestID" element={<DisDineout></DisDineout>}></Route>
              <Route path="/Cart" element={<AddToCart></AddToCart>}></Route>
              <Route path="/Signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
        </Provider>
        </>
    )
}


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);