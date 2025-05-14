import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import Button from "../ui/Button";
function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li className="flex items-center justify-between mb-4 bg-white p-2 rounded-xl">
      <div className="flex  gap-4">
        <img src={item.image} alt={item.name} className="size-18 rounded-lg" />
        <p>{item.name}</p>
      </div>
      <div className="flex items-center gap-4">
        <Button styles="small" onClick={()=>dispatch(decreaseItemQuantity(item))}>-</Button>
        <span>{item.quantity}</span>
        <Button styles="small" onClick={() => dispatch(increaseItemQuantity(item))}>+</Button>
        {/* <p>{item.price ? item.price : item.unitPrice}</p> */}
        <p>{item.price}</p>
        <p>🗑️</p>
      </div>
    </li>
  );
}

export default CartItem;
