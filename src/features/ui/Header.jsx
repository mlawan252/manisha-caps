import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getNumOfCart } from "../cart/cartSlice";

function Header() {
  const numOfCartItems = useSelector(getNumOfCart);

  return (
    <header className="px-3 py-4 bg-yellow-400 fixed top-0 w-full z-50 ">
      <nav className="flex gap-4 uppercase text-slate-600 font-medium  text-sm">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="ml-auto">
          🛒 {numOfCartItems > 0 && numOfCartItems}
        </Link>
      </nav>
    </header>
  );
}
export default Header;
