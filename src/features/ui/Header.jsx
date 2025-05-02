import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="px-4 py-2 bg-amber-500 fixed top-0 w-full z-50">
      <nav className="flex gap-4 uppercase">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">🛒</Link>
      </nav>
    </header>
  );
}
export default Header;
