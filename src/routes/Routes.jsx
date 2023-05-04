import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Blog/Blog";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Recipes from "../components/Recipes/Recipes";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Navigate to='/chef'></Navigate>,
            },
            {
                path: '/chef',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:4523/data')
            },  
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chef/:id',
                element: <PrivateRouter><ChefDetails></ChefDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:4523/data/${params.id}`)
            }
        ]
    },
    
])


export default router