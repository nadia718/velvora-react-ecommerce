import LogoImage from "../assets/Images/WebImages/LogoImage/Logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { getCategories } from "../services/productService";
import { HashLink } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const { wishlist } = useContext(WishlistContext);
    const { cart } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);
    const [user, setUser] = useState(null);
    const [showProfileMenu, setShowProfileMenu] = useState(false);


    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        setShowProfileMenu(false);
        navigate("/login");
    };

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));

        if (loggedInUser) {
            setUser(loggedInUser);
        }
    }, []);


    useEffect(() => {

        async function fetchCategories() {

            try {

                const data = await getCategories();

                setCategories(data);

            } catch (error) {

                console.error(error);

            }

        }

        fetchCategories();

    }, []);

    return (
        <nav className="bg-white shadow-sm">

            {/* Top Bar */}
            <div className="hidden lg:block bg-[#111111] text-white text-sm">
                <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

                    <p>🚚 Free Shipping on Orders Over $100</p>

                    <p className="text-[#C8A97E] font-medium">
                        🔥 Summer Sale : Up to 40% OFF
                    </p>

                    <div className="flex items-center gap-4">
                        {/* <Link to="/login" className="hover:text-[#C8A97E] duration-300">
                            Login
                        </Link>

                        <Link to="/register" className="hover:text-[#C8A97E] duration-300">
                            Register
                        </Link> */}

                        {user ? (
                            <p className="text-[#C8A97E] font-medium">
                                Welcome, {user.name}
                            </p>
                        ) : (
                            <>
                                <Link to="/login" className="hover:text-[#C8A97E] duration-300">
                                    Login
                                </Link>

                                <Link to="/register" className="hover:text-[#C8A97E] duration-300">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                </div>
            </div>

            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4 py-4 relative">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/">
                        <img
                            src={LogoImage}
                            alt="Velvora Logo"
                            className="w-[150px]"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 font-medium">

                        <Link to="/" className="hover:text-[#C8A97E] duration-300">
                            Home
                        </Link>

                        <Link to="/products" className="hover:text-[#C8A97E] duration-300">
                            Shop
                        </Link>

                        <div
                            className="relative"
                            onMouseEnter={() => setShowCategories(true)}
                            onMouseLeave={() => setShowCategories(false)}
                        >

                            <Link
                                to="/categories"
                                className="hover:text-[#C8A97E] duration-300"
                            >
                                Categories
                            </Link>

                            {showCategories && (

                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[900px] bg-white rounded-2xl shadow-2xl  p-8 z-50">
                                    <div className="grid grid-cols-4 gap-8">

                                        {categories.map((category) => (

                                            <Link
                                                key={category.slug}
                                                to={`/products/category/${category.slug}`}
                                                className="capitalize hover:text-[#AF823D] font-medium duration-300"
                                            >
                                                {category.name.replace(/-/g, " ")}
                                            </Link>

                                        ))}

                                    </div>

                                </div>

                            )}

                        </div>

                        <Link to="/newarrivals" className="hover:text-[#C8A97E] duration-300">
                            New Arrivals
                        </Link>

                        <HashLink smooth to="/#contact">
                            Contact
                        </HashLink>

                    </div>

                    {/* Right Icons */}
                    <div className="hidden lg:flex items-center gap-4">

                        <Link to="/wishlist" className="relative bg-[#F8F4EF] p-3 rounded-full hover:bg-[#C8A97E] hover:text-white duration-300">
                            <FaHeart />

                            {wishlist.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#C8A97E] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                                    {wishlist.length}
                                </span>
                            )}
                        </Link>

                        <div className="relative">
                            <button
                                onClick={() => setShowProfileMenu(!showProfileMenu)}
                                className="bg-[#F8F4EF] p-3 rounded-full hover:bg-[#C8A97E] hover:text-white duration-300"
                            >
                                <FaUser />
                            </button>

                            {showProfileMenu && (
                                <div className="absolute right-0 top-14 w-52 bg-white shadow-xl rounded-xl p-4 z-50">

                                    {user ? (
                                        <>
                                            <p className="font-semibold border-b pb-3 mb-3">
                                                {user.name}
                                            </p>

                                            <Link
                                                to="/profile"
                                                onClick={() => setShowProfileMenu(false)}
                                                className="block py-2 hover:text-[#C8A97E]"
                                            >
                                                My Profile
                                            </Link>

                                            <Link
                                                to="/orders"
                                                onClick={() => setShowProfileMenu(false)}
                                                className="block py-2 hover:text-[#C8A97E]"
                                            >
                                                My Orders
                                            </Link>

                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left py-2 text-red-500 hover:text-red-600"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                to="/login"
                                                onClick={() => setShowProfileMenu(false)}
                                                className="block py-2 hover:text-[#C8A97E]"
                                            >
                                                Login
                                            </Link>

                                            <Link
                                                to="/register"
                                                onClick={() => setShowProfileMenu(false)}
                                                className="block py-2 hover:text-[#C8A97E]"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}

                                </div>
                            )}
                        </div>

                        <Link
                            to="/cart"
                            className="relative bg-[#F8F4EF] p-3 rounded-full hover:bg-[#C8A97E] hover:text-white duration-300"
                        >
                            <FaShoppingCart />

                            {cart.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#C8A97E] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                                    {cart.length}
                                </span>
                            )}
                        </Link>



                    </div>


                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>


                    {/* Mobile Menu */}
                    {menuOpen && (
                        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t z-50">

                            <div className="flex flex-col gap-5 p-5 font-medium">

                                <Link to="/" onClick={() => setMenuOpen(false)}>
                                    Home
                                </Link>

                                <Link to="/products" onClick={() => setMenuOpen(false)}>
                                    Shop
                                </Link>

                                <Link to="/categories" onClick={() => setMenuOpen(false)}>
                                    Categories
                                </Link>

                                <Link to="/newarrivals" onClick={() => setMenuOpen(false)}>
                                    New Arrivals
                                </Link>

                                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                                    Contact
                                </Link>

                                <div className="pt-5 border-t">

                                    {!user ? (
                                        <>
                                            <Link
                                                to="/login"
                                                onClick={() => setMenuOpen(false)}
                                                className="block py-2 hover:text-[#C8A97E]"
                                            >
                                                Login
                                            </Link>

                                            <Link
                                                to="/register"
                                                onClick={() => setMenuOpen(false)}
                                                className="block py-2 hover:text-[#C8A97E]"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                to="/profile"
                                                onClick={() => setMenuOpen(false)}
                                                className="block py-2 hover:text-[#C8A97E]"
                                            >
                                                My Profile
                                            </Link>

                                            <Link
                                                to="/orders"
                                                onClick={() => setMenuOpen(false)}
                                                className="block py-2 hover:text-[#C8A97E]"
                                            >
                                                My Orders
                                            </Link>

                                            <button
                                                onClick={() => {
                                                    handleLogout();
                                                    setMenuOpen(false);
                                                }}
                                                className="block py-2 text-red-500"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    )}

                                    <div className="flex items-center gap-4 pt-4 border-t mt-4">

                                        <Link
                                            to="/wishlist"
                                            onClick={() => setMenuOpen(false)}
                                            className="relative bg-[#F8F4EF] p-3 rounded-full hover:bg-[#C8A97E] hover:text-white duration-300"
                                        >
                                            <FaHeart />
                                            {wishlist.length > 0 && (
                                                <span className="absolute -top-1 -right-1 bg-[#C8A97E] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                                                    {wishlist.length}
                                                </span>
                                            )}
                                        </Link>

                                        <Link
                                            to="/cart"
                                            onClick={() => setMenuOpen(false)}
                                            className="relative bg-[#F8F4EF] p-3 rounded-full hover:bg-[#C8A97E] hover:text-white duration-300"
                                        >
                                            <FaShoppingCart />
                                            {cart.length > 0 && (
                                                <span className="absolute -top-1 -right-1 bg-[#C8A97E] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                                                    {cart.length}
                                                </span>
                                            )}
                                        </Link>

                                        <div className="relative">

                                            <button
                                                onClick={() => setShowProfileMenu(!showProfileMenu)}
                                                className="bg-[#F8F4EF] p-3 rounded-full hover:bg-[#C8A97E] hover:text-white duration-300"
                                            >
                                                <FaUser />
                                            </button>

                                            {showProfileMenu && (
                                                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-44 bg-white shadow-xl rounded-xl border z-50">

                                                    {user ? (
                                                        <>
                                                            <Link
                                                                to="/profile"
                                                                onClick={() => {
                                                                    setShowProfileMenu(false);
                                                                    setMenuOpen(false);
                                                                }}
                                                                className="block px-4 py-3 hover:bg-gray-100"
                                                            >
                                                                My Profile
                                                            </Link>

                                                            <Link
                                                                to="/orders"
                                                                onClick={() => {
                                                                    setShowProfileMenu(false);
                                                                    setMenuOpen(false);
                                                                }}
                                                                className="block px-4 py-3 hover:bg-gray-100"
                                                            >
                                                                My Orders
                                                            </Link>

                                                            <button
                                                                onClick={() => {
                                                                    handleLogout();
                                                                    setShowProfileMenu(false);
                                                                    setMenuOpen(false);
                                                                }}
                                                                className="w-full text-left px-4 py-3 text-red-500 hover:bg-gray-100"
                                                            >
                                                                Logout
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Link
                                                                to="/login"
                                                                onClick={() => {
                                                                    setShowProfileMenu(false);
                                                                    setMenuOpen(false);
                                                                }}
                                                                className="block px-4 py-3 hover:bg-gray-100"
                                                            >
                                                                Login
                                                            </Link>

                                                            <Link
                                                                to="/register"
                                                                onClick={() => {
                                                                    setShowProfileMenu(false);
                                                                    setMenuOpen(false);
                                                                }}
                                                                className="block px-4 py-3 hover:bg-gray-100"
                                                            >
                                                                Register
                                                            </Link>
                                                        </>
                                                    )}

                                                </div>
                                            )}

                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </div>

        </nav>
    );
}

export default Navbar;