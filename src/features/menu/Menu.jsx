import MenuItem from "./MenuItem";
import { getMenu } from "../services/apiManishaCaps";

function Menu({ caps }) {
  return (
    <div className="mt-6 mb-4">
      <h2 className="text-center font-bold text-slate-500 font-mono text-xl uppercase">Trending Caps</h2>
      <ul className="flex flex-wrap items-center justify-around p-4 gap-4 sm:gap-0 ">
        {caps.map((cap) => (
          <MenuItem cap={cap} key={cap.id} />
        ))}
      </ul>
    </div>
  );
}
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
