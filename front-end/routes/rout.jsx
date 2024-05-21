import Basket from "../pages/Basket";
import RouterPagee from "../pages/RouterPagee";
import Add from "../pages/add-page";
import Detail from "../pages/detail";
import Home from "../pages/home";

export const ROOT = [{
    path: "/",
    element: <RouterPagee/>,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "/add-item",
            element: <Add />
        },
        {
            path: "/:id",
            element: <Detail/>
        },
        {
            path: "/basket",
            element: <Basket/>
        }
    ]
}]