import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Food from "./Food";
import Dine from "./Dine";
function App(){
    return(
        <>
          <Header></Header>
          <Food></Food>
          <Dine></Dine>
        </>
    )
}


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);