import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Fooddeliverycd from "./foodeliverycd";
import { BrowserRouter, Routes, Route} from "react-router";
function App(){
    return(
        <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/resturant" element={<Fooddeliverycd></Fooddeliverycd>}></Route>
          </Routes>
        </BrowserRouter>
        </>
    )
}


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);