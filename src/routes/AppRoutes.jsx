import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart"
import MainLayouts from "../layouts/MainLayouts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "../pages/Checkout";
import Success from "../pages/Success";
import Wishlist from "../pages/Wishlist";
import Categories from "../pages/Categories";
import CategoryProduct from "../pages/CategoryProducts";
import NewArrivals from "../pages/Newarrivals";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../components/ProtectedRoute";
import MyProfile from "../pages/MyProfile";
import MyOrders from "../pages/MyOrders";




function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="categories" element={<Categories />} />
          <Route path="/products/category/:category" element={<CategoryProduct />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute> <MyProfile /> </ProtectedRoute>}/>
          <Route path="/orders" element={<ProtectedRoute> <MyOrders /> </ProtectedRoute>} />

        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
    </>
  );
}

export default AppRoutes;