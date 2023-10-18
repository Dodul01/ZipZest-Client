import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

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
        element: <AddProduct></AddProduct>
      },
      {
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      },{
        path: '/:brandName',
        loader: ()=> fetch('http://localhost:5000/ads'),
        element: <BrandProducts></BrandProducts>
      }
    ]
  }
])

//  website name : ZipZest

export default router;