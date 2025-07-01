import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import AddProducts from "../components/AddProducts";
import Login from "../components/Login";
import Register from "../components/Register";
import MyProducts from "../components/MyProducts";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/addProduct",
                element: <AddProducts></AddProducts>
            },
            {
                path: "/myProducts",
                element: <MyProducts></MyProducts>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },

        ]
    },
]);

