import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Food from "./Food";
import Dine from "./Dine";
import Footer from "./Footer";
import Scan_to_download from "./scan_to_download";
function App(){
    return(
        <>
          <Header></Header>
          <Food></Food>
          <Dine></Dine>
          <Scan_to_download></Scan_to_download>
          <Footer></Footer>
        </>
    )
}


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);