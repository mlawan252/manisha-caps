import { useDispatch, useSelector } from "react-redux";
import { add, getCart, removeItem } from "../cart/cartSlice";
import Button from "../ui/Button";
import { memo, useCallback, useMemo } from "react";

function MenuItem({ cap }) {
  const { id, name, image, unitPrice } = cap;
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  // const inCart = cart.some((item) => item.id === id);
  const inCart = useMemo(() => {
    return cart.some((item) => item.id === id);
  }, [cart, id]);
 
  function handleAddCap(){
    const newCap = {
      id,
      name,
      quantity: 1,
      unitPrice,
      price: unitPrice,
      image,
    };
    inCart ? dispatch(removeItem(id)) : dispatch(add(newCap));
  } 
  return (
    <li
      className={`border-b border-stone-200 border px-4 py-2 rounded-2xl basis-full sm:basis-auto bg-slate-50 shadow-md ${
        inCart ? "opacity-40" : ""
      }`}
    >
      <img src={cap.image} alt={cap.name} className="h-56 w-full" />
      <div className="text-center uppercase text-slate-600">
        <p className="text-sm font-semibold ">{cap.name}</p>
        <p className="text-xl font-bold">{cap.price}</p>
        <Button onClick={handleAddCap} styles="primary" inCart={inCart}>
          {inCart ? "Remove From Cart" : "Add to Cart"}
        </Button>
      </div>
    </li>
  );
}
export default memo(MenuItem) ;
