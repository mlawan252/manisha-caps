import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate()
  if (error)
    return (
      <div className="flex items-center justify-center">
        <p className="text-4xl">{error.message} 😣</p>
      </div>
    );
  return (
    <div className="flex flex-col items-center justify-center bg-stone-300 h-screen">
      <p className="text-2xl">Page not found 😣</p>
      <button className="bg-yellow-400 px-2 py-1 cursor-pointer rounded-xl" onClick={()=>navigate(-1)}>⬅️ Back</button>
    </div>
  );
}
export default Error;
