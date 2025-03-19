import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Food from "./Food";
function App(){
    return(
        <>
          <Header></Header>
          <Food></Food>
        </>
    )
}


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);