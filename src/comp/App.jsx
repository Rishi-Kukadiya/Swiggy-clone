import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
function App(){
    return(
        <>
          <Header></Header>
        </>
    )
}


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);