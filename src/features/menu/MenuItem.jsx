function MenuItem({ cap }) {
  return (
    <li className="border-b border-stone-200 border px-4 py-2 rounded-xl bg-slate-100 shadow-md">
      <img src={cap.image} alt={cap.name} className="h-56" />
      <div className="text-center uppercase">
      <p className="text-sm text-slate-600">{cap.name}</p>
      <p className="text-xl font-semibold">{cap.price}</p>
      <button className="bg-yellow-400 font-medium text-sm px-3 py-2 text-slate-600 tracking-wider rounded-md cursor-pointer uppercase">Add to cart</button>
      </div>
      
    </li>
  );
}
export default MenuItem;
