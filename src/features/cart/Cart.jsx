import { useSelector } from "react-redux";
import UserForm from "../user/UserForm";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector(state=>state.cart.cart);
  
  return (
    <div className="bg-stone-400 py-8 font-mono">
      <div className="sm:grid sm:grid-cols-[1fr_400px]  md:grid md:grid-cols-[1fr_400px] grid grid-cols-[1fr] md:gap-4 bg-yellow-50 rounded-md max-w-5xl mx-auto py-8 px-4 ">
        <section >
          <div>
            <CartHeader cart={cart} />
            <ul>
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </ul>
          </div>
        </section>
       <UserForm />
      </div>
    </div>
  );
}
export default Cart;
