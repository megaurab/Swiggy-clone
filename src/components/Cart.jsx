import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector((store)=>store.cart.cartItems);
    const dispatch = useDispatch();

    const clearCartt=()=>{
        dispatch(clearCart());
    }

    return(
      <div>
        <div className="w-[500px] mx-auto my-4 bg-grey-50 shadow-lg p-4 flex flex-col">
            <button className="bg-black text-white p-3 rounded-xl" onClick={clearCartt}>Clear cart</button>
            <ItemList items={cartItems}/>
        </div>
      </div>
    )
}

export default Cart;