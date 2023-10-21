import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import PrivateRouter from "./PrivateRouter";
import Blog from "../Pages/Blog/Blog";
import Gallery from "../Pages/Gallery/Gallery";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addProduct',
        element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
      },
      {
        path: '/updateProduct/:id',
        element: <PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>
      },
      {
        path: '/myCart',
        element: <PrivateRouter><MyCart></MyCart></PrivateRouter>
      },{
        path: '/:brandName',
        loader: ()=> fetch('https://assignment-10-server-psi-ten.vercel.app/ads'),
        element: <BrandProducts></BrandProducts>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>  
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/productDetails/:id',
        loader: ({params})=> fetch(`https://assignment-10-server-psi-ten.vercel.app/products/${params.id}`),
        element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>
      },
      {
        path: '/blog',
        element: <PrivateRouter><Blog></Blog></PrivateRouter>
      },
      {
        path: '/gallery',
        element: <PrivateRouter><Gallery></Gallery></PrivateRouter>
      }
    ]
  }
])

export default router;