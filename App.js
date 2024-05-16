import React from "react";
import ReactDOM from "react-dom/client"



const Header=()=>{
    return(
<div id="header">
   <div id="logo">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNODsA2eoIX7wAZsIsK42lM8G1OxQzGYocrWUL3mW2xA&s"></img>
   </div>
   <div id="nav-items">
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
   </div>
</div>


    )
}

const AppLayout=()=>{
    return (
        <div id="appLayout">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)