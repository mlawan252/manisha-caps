import MenuItem from "./MenuItem";
import { getMenu } from "../services/apiManishaCaps";

function Menu({ caps }) {
  return (
    <ul className="flex flex-wrap items-center justify-around mt-8 p-4 ">
      {caps.map((cap) => (
        <MenuItem cap={cap} key={cap.id} />
      ))}
    </ul>
  );
}
export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
