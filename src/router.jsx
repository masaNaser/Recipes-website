import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Recipes from "./pages/Recipes";


const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        children:[
              {
                index:true,
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/policy',
                element:<Policy/>
            },
              {
                path:'/recipes',
                element:<Recipes/>
            }
        ]
    }
]);
export default router;