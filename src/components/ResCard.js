import { IMAGE_URL } from "../utils/constFile"

export default ResCard=(props)=>{

    const {resCard}=props
    return(
        <div id="res-card">
            <img id="res-image" alt="res-image" src={IMAGE_URL+resCard.img}></img>
          
          <div id="res-details">
            <h1 id="lineHeight">{resCard.name}</h1>
            <p  id="lineHeight"> {resCard.cuisines?.join(", ")}</p>
            {/* <p> 4.3 stars</p> */}

            <p  id="lineHeight"> {resCard.minDeliveryTime}-{resCard.maxDeliveryTime}mins</p>
          </div>
          
           
        </div>

    )
}


