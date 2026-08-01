import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginUser } from "../services/authService";
import loginImage from "../assets/Images/WebImages/CategoryImages/KitchenAccessories.png";

const Login = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {
            const result = await loginUser(email, password);

            if (result.success) {
                localStorage.setItem("user", JSON.stringify(result.user));

                alert("Login Successful");

                navigate("/");
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred during login. Please try again.");
        }
    };

    return (
        <section className="min-h-screen bg-[#F8F5F1] flex items-center justify-center py-10 px-5">
            <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                {/* Left Side */}
                <div className="hidden lg:block relative">
                    <img
                        src={loginImage}
                        alt="Login"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/35"></div>

                    <div className="absolute bottom-10 left-10 text-white">
                        <h2 className="text-4xl font-bold mb-3">
                            Welcome to Velvora
                        </h2>

                        <p className="text-lg text-gray-200 max-w-sm">
                            Luxury furniture and home décor crafted for modern living.
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center px-8 py-12">

                    <div className="w-full max-w-md">

                        <div className="text-center mb-10">
                            <h1 className="text-4xl font-bold text-[#2F2F2F]">
                                Welcome Back
                            </h1>

                            <p className="text-gray-500 mt-3">
                                Login to your Velvora account
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full h-14 px-5 border border-gray-300 rounded-xl outline-none focus:border-[#8B5E3C]"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Password
                                </label>

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full h-14 px-5 border border-gray-300 rounded-xl outline-none focus:border-[#8B5E3C]"
                                        required
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-5 top-1/2 -translate-y-1/2"
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash size={20} />
                                        ) : (
                                            <FaEye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember */}
                            <div className="flex justify-between items-center">
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" />
                                    Remember Me
                                </label>

                                <Link
                                    to="/forgot-password"
                                    className="text-[#8B5E3C] font-medium"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full h-14 rounded-xl bg-[#8B5E3C] hover:bg-[#6F472B] text-white font-semibold duration-300"
                            >
                                Login
                            </button>

                        </form>

                        <div className="flex items-center my-8">
                            <div className="flex-1 h-px bg-gray-300"></div>

                            <span className="px-4 text-gray-500">
                                OR
                            </span>

                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        <button className="w-full h-14 border rounded-xl hover:bg-gray-50 transition">
                            Continue with Google
                        </button>

                        <p className="text-center mt-8 text-gray-600">
                            Don't have an account?

                            <Link
                                to="/register"
                                className="text-[#8B5E3C] font-semibold ml-2"
                            >
                                Register
                            </Link>
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Login;