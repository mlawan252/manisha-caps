import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/Pages/Home";
import About from "./features/Pages/About";
import Contact from "./features/Pages/Contact";
import Cart from "./features/cart/Cart";
import { loader as menuLoader } from "./features/menu/Menu";
import Error from "./features/ui/Error";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />,
      loader:menuLoader,
      errorElement:<Error />
    },
    {
      path:"/about",
      element:<About />,
      errorElement:<Error />
    },
    {
      path:"/contact",
      element:<Contact />,
      errorElement:<Error />
    },
    {
      path:"/cart",
      element:<Cart />,
      errorElement:<Error />
    },
    {
      path:"*",
      element:<Error />
    }
   
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
