import { createBrowserRouter } from "react-router-dom";
import HomeBody from "../Pages/Home/HomeBody";
import ThemeBody from "../Pages/Theme/ThemeBody";
import TemplateBody from "../Pages/Template/TemplateBody";
import UIBody from "../Pages/UIDesign/UIBody";
import Plugin from "../Pages/Plugin/Plugin";
import CodeBody from "../Pages/Code/CodeBody";
import AboutBody from "../Pages/About/AboutBody";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CardProduct from "../Components/CardProduct";
import Spinner from "../Components/Spinner";
import CardPost from "../Pages/PostCard/CardPost";
import Login from "../Pages/Login/Login";
import Shop from "../Pages/Cart/Shop";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeBody />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/theme',
        element: <ThemeBody />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/template',
        element: <TemplateBody />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/design',
        element: <UIBody />,
        errorElement: <ErrorPage />,

    },
    {
        path: '/plugin',
        element: <Plugin />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/code',
        element: <CodeBody />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/about',
        element: <AboutBody />,
        errorElement: <ErrorPage />
    },
    {
        path: '/cart/:id',
        element: <CardPost />
    },
    {
        path: '/my-acount',
        element: <Login />
    },
    {
        path:'/cart',
        element:<Shop/>
    }
]);