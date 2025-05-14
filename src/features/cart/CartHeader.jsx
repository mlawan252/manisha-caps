import { useNavigate } from "react-router-dom";

function CartHeader({ cart }) {
  const navigate = useNavigate();
  return (
    <div className="mb-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 font-bold text-stone-600 tracking-wide cursor-pointer"
      >
        &larr; Back to Shopping
      </button>
      <p className="text-sm  text-stone-500 font-bold tracking-wider">
        Shopping Cart
      </p>
      <p className="text-sm text-stone-500 font-bold tracking-wide">
        You have {" "}
        <span className="font-bold text-lg text-stone-700">{cart.length} {" "}</span>
        Items in your cart
      </p>
    </div>
  );
}
export default CartHeader;
