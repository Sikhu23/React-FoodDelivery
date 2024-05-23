import { resList } from "../utils/mockData"
import ResCard from "./ResCard"

export default ResContainer=()=>{

    return (
    <div id="res-container">

        {resList.map(restaurant=><ResCard resCard={restaurant} key={restaurant.id}/>)}
        

    </div>
    )

}