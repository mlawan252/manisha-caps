import { useState } from "react";
import CartSummary from "../cart/CartSummary";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItems, getCart, getNumOfCart, getTotalPrice } from "../cart/cartSlice";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const cart = useSelector(getCart);
  const numOfCartItems = useSelector(getNumOfCart);
  const [name, setName] = useState("");
  const [address, setAddress] = useState();
  const [whatsappNumber, setWhatsappNumber] = useState();
  const totalPrice = useSelector(getTotalPrice)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (numOfCartItems === 0) return null;
  function handleSubmit(e) {
    e.preventDefault();
    const order = {
      name,
      address,
      whatsappNumber,
      cart,
      totalPrice
    };
    console.log(order);
    dispatch(clearCartItems());
    navigate("/");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="py-6 px-4 bg-yellow-600 flex flex-col gap-4 text-stone-50 rounded-md font-mono h-screen"
    >
      <h1>Delivery Details</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        className="placeholder:text-stone-700 text-sm ring text-stone-950 ring-stone-50 outline-0 tracking-wide px-3 py-2 rounded-sm bg-stone-50"
        required
      />
      <input
        type="text"
        name="name"
        value={address}
        placeholder="Enter your Address"
        onChange={(e) => setAddress(e.target.value)}
        className="placeholder:text-stone-700 ring ring-stone-50 text-stone-950 outline-0 text-sm tracking-wide px-3 py-2 rounded-sm bg-stone-50"
        required
      />
      <input
        type="number"
        name="name"
        value={whatsappNumber}
        placeholder="Enter your whatsapp number"
        onChange={(e) => setWhatsappNumber(e.target.value)}
        className="placeholder:text-stone-7000 ring ring-stone-50 text-stone-950 outline-0 text-sm tracking-wide px-3 py-2 rounded-sm bg-stone-50"
        required
      />
      <CartSummary />
      <button className="font-medium text-lg px-3 py-2 text-slate-600 tracking-wider bg-yellow-300 rounded-md cursor-pointer w-full uppercase mt-auto">
        Make Order
      </button>
    </form>
  );
}
export default UserForm;
