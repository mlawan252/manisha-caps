import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/Pages/Home";
import About from "./features/Pages/About";
import Contact from "./features/Pages/Contact";
import Cart from "./features/cart/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/about",
      element:<About />
    },
    {
      path:"/contact",
      element:<Contact />
    },
    {
      path:"/cart",
      element:<Cart />
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
