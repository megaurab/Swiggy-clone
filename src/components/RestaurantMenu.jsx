import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

    const {restaurantId} = useParams();

    const restaurantMenu = useRestaurantMenu(restaurantId);
    console.log(restaurantMenu);

    return(
        <div>This is the restaurant menu!!</div>
    )
}

export default RestaurantMenu;