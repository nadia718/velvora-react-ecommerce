import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import registerImage from "../assets/Images/WebImages/CategoryImages/homeDecoration.png";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const navigate = useNavigate();

    const handleRegister = async (e) => {
        try {
            e.preventDefault();

            if (!name || !email || !phone || !password || !confirmPassword) {
                alert("Please fill all fields");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            const userData = {
                name,
                email,
                phone,
                password,
            };
            const result = await registerUser(userData);
            if (result.success) {
                alert("Registration Successful");

                navigate("/login");
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("An error occurred during registration.");
        }
    };

    return (
        <section className="min-h-screen bg-[#F8F5F1] flex items-center justify-center py-10 px-5">
            <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                {/* Left Side */}
                <div className="hidden lg:block relative">
                    <img
                        src={registerImage}
                        alt="Register"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/35"></div>

                    <div className="absolute bottom-10 left-10 text-white">
                        <h2 className="text-4xl font-bold mb-3">
                            Join Velvora
                        </h2>

                        <p className="text-lg text-gray-200 max-w-sm">
                            Create your account and discover premium furniture
                            and luxury home décor.
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center px-8 py-12">

                    <div className="w-full max-w-md">

                        <div className="text-center mb-10">
                            <h1 className="text-4xl font-bold text-[#2F2F2F]">
                                Create Account
                            </h1>

                            <p className="text-gray-500 mt-3">
                                Create your Velvora account
                            </p>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-6">

                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full h-14 px-5 border border-gray-300 rounded-xl outline-none focus:border-[#8B5E3C]"
                                />
                            </div>

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
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full h-14 px-5 border border-gray-300 rounded-xl outline-none focus:border-[#8B5E3C]"
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

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm font-semibold mb-2">
                                    Confirm Password
                                </label>

                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full h-14 px-5 border border-gray-300 rounded-xl outline-none focus:border-[#8B5E3C]"
                                    />

                                    <button
                                        type="button"

                                        onClick={() =>
                                            setShowConfirmPassword(!showConfirmPassword)
                                        }
                                        className="absolute right-5 top-1/2 -translate-y-1/2"
                                    >
                                        {showConfirmPassword ? (
                                            <FaEyeSlash size={20} />
                                        ) : (
                                            <FaEye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full h-14 rounded-xl bg-[#8B5E3C] hover:bg-[#6F472B] text-white font-semibold duration-300"
                            >
                                Create Account
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
                            Already have an account?

                            <Link
                                to="/login"
                                className="text-[#8B5E3C] font-semibold ml-2"
                            >
                                Login
                            </Link>
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Register;