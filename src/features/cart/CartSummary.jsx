import { useSelector } from "react-redux";
import { getTotalItems, getTotalPrice } from "./cartSlice";

function CartSummary() {
  const totalPrice = useSelector(getTotalPrice);
  const totalItems = useSelector(getTotalItems);
  return (
    <div className="flex items-center justify-between mt-4 ">
      <ul>
        <li>Total Items</li>
        <li>Total Price</li>
      </ul>
      <ul>
        <li className="tracking-wider">{totalItems}</li>
        <li className="tracking-wider">{totalPrice}</li>
      </ul>
    </div>
  );
}
export default CartSummary;
