import { LOGO_URL } from "../utils/constFile"

export default Header=()=>{
    return(
<div id="header">
   <div id="logo">
    <img src={LOGO_URL}></img>
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