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
function App(){
    return(
        <>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/resturant" element={<Fooddeliverycd></Fooddeliverycd>}></Route>
              <Route path="/fooddetails/:collectionId" element={<Fooddetails></Fooddetails>}></Route>
              <Route path="/dineout" element={<Dineout></Dineout>}></Route>
              <Route path="/dineout/booktable/:RestID" element={<Booktabel></Booktabel>}></Route>
              <Route path="/dineout/:RestID" element={<DisDineout></DisDineout>}></Route>
              <Route path="/Signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
        </>
    )
}


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);