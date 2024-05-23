import React from "react";
import ReactDOM from "react-dom/client"
import { resList } from "./src/utils/mockData";
import SearchBox from "./src/components/SearchBox";
import Header from "./src/components/Header";
import Body from "./src/components/Body";


// const Header=()=>{
//     return(
// <div id="header">
//    <div id="logo">
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNODsA2eoIX7wAZsIsK42lM8G1OxQzGYocrWUL3mW2xA&s"></img>
//    </div>
//    <div id="nav-items">
//     <ul>
//         <li>Home</li>
//         <li>About Us</li>
//         <li>Contact</li>
//         <li>Cart</li>
//     </ul>
//    </div>
// </div>


//     )
// }

// const ResCard=(props)=>{

//     const {resCard}=props
//     return(
//         <div id="res-card">
//             <img id="res-image" alt="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resCard.img}></img>
          
//           <div id="res-details">
//             <h1 id="lineHeight">{resCard.name}</h1>
//             <p  id="lineHeight"> {resCard.cuisines?.join(", ")}</p>
//             {/* <p> 4.3 stars</p> */}

//             <p  id="lineHeight"> {resCard.minDeliveryTime}-{resCard.maxDeliveryTime}mins</p>
//           </div>
          
           
//         </div>

//     )
// }

// const ResContainer=()=>{

//     return (
//     <div id="res-container">

//         {resList.map(restaurant=><ResCard resCard={restaurant} key={restaurant.id}/>)}
        

//     </div>
//     )

// }


// const Body=()=>{
//     return <div id="body">
//     <div id="search">
//         <SearchBox/>
//     </div>

//     <ResContainer/>
    


//     </div>
// }


const AppLayout=()=>{
    return (
        <div id="appLayout">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)