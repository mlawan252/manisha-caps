import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";


function Menu() {
  const [caps, setCaps] = useState([]);
  useEffect(function () {
    async function loadCaps() {
      const res = await fetch("http://localhost:5000/caps");
      const data = await res.json();
      setCaps(data);
    }
    loadCaps();
  }, []);
  return (
    <ul className="divide-y divide-stone-300">
      {caps.map((cap) => (
        <MenuItem cap={cap} key={cap.id}/>
      ))}
    </ul>
  );
}
export default Menu;
