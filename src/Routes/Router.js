import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Home/Products/Products";
import Login from "../Pages/Login/Login";
import MyProduct from "../Pages/MyProduct/MyProduct";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Signup from "../Pages/Signup/Signup";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`https://used-products-resale-server-two.vercel.app/products/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/myproduct',
                element: <MyProduct></MyProduct>
            }
            ,
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }

        ],
    }
]);

export default router;