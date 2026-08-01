import { getProductById, getRelatedProducts } from "../services/productService";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {

    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState("description");
    const [relatedProducts, setRelatedProducts] = useState([]);

    const { id } = useParams();

    useEffect(() => {

        async function fetchProduct() {

            try {

                const data = await getProductById(id);

                setProduct(data);

                const relatedData = await getRelatedProducts(data.category);

                const filteredProducts = relatedData.filter(
                    (item) => item.id !== data.id
                );

                setRelatedProducts(filteredProducts);

                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });

            } catch (error) {

                console.error("Error fetching product:", error);

            }

        }

        fetchProduct();

    }, [id]);


    const handleAddToCart = () => {
        addToCart(product);
    };




    return (
        <section className="max-w-7xl mx-auto px-4 py-16">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Left Side */}

                <div className="bg-[#F8F8F8] rounded-xl p-8">

                    <img
                        src={product?.thumbnail}
                        alt={product?.title}
                        className="w-full h-[500px] object-contain"
                    />

                </div>

                {/* Right Side */}

                <div>

                    <p className="text-[#AF823D] uppercase tracking-wider mb-2">
                        {product?.category}
                    </p>

                    <h1 className="text-4xl font-bold mb-4">
                        {product?.title}
                    </h1>

                    <div className="flex items-center gap-3 mb-5">

                        <span className="text-yellow-500">
                            ⭐ {product?.rating}
                        </span>

                        <span className="text-gray-500">
                            Brand: {product?.brand}
                        </span>

                    </div>

                    <h2 className="text-3xl font-bold mb-6">
                        ${product?.price}
                    </h2>

                    <p className="text-gray-600 leading-8 mb-8">
                        {product?.description}
                    </p>

                    <p className="mb-8">
                        <span className="font-semibold">
                            Stock:
                        </span>{" "}
                        {product?.stock}
                    </p>

                    <button onClick={handleAddToCart} className="bg-black text-white px-10 py-4 rounded-lg hover:bg-[#AF823D] duration-300">
                        Add To Cart
                    </button>

                </div>

            </div>

            <div className="border-b flex gap-10 mt-16">

                <button
                    onClick={() => setActiveTab("description")}
                    className={`pb-4 ${activeTab === "description"
                        ? "border-b-2 border-black font-semibold text-black"
                        : "text-gray-500"
                        }`}
                >
                    Description
                </button>

                <button
                    onClick={() => setActiveTab("reviews")}
                    className={`pb-4 ${activeTab === "reviews"
                        ? "border-b-2 border-black font-semibold text-black"
                        : "text-gray-500"
                        }`}
                >
                    Reviews
                </button>

                <button
                    onClick={() => setActiveTab("shipping")}
                    className={`pb-4 ${activeTab === "shipping"
                        ? "border-b-2 border-black font-semibold text-black"
                        : "text-gray-500"
                        }`}
                >
                    Shipping
                </button>

            </div>


            <div className="mt-10">

                {activeTab === "description" && (

                    <div>

                        <h2 className="text-2xl font-bold mb-6">
                            Product Description
                        </h2>

                        <p className="text-gray-600 leading-8">
                            {product?.description}
                        </p>

                        <div className="mt-8 space-y-3">

                            <p>
                                <strong>Brand:</strong> {product?.brand}
                            </p>

                            <p>
                                <strong>Category:</strong> {product?.category}
                            </p>

                            <p>
                                <strong>Rating:</strong> ⭐ {product?.rating}
                            </p>

                            <p>
                                <strong>Stock:</strong> {product?.stock}
                            </p>

                        </div>

                    </div>

                )}

                {activeTab === "reviews" && (

                    <div>

                        <h2 className="text-2xl font-bold mb-6">
                            Customer Reviews
                        </h2>

                        <p className="text-gray-600">
                            ⭐⭐⭐⭐⭐
                        </p>

                        <p className="mt-4 text-gray-600">
                            Reviews API next step me integrate karenge.
                        </p>

                    </div>

                )}

                {activeTab === "shipping" && (

                    <div>

                        <h2 className="text-2xl font-bold mb-6">
                            Shipping Information
                        </h2>

                        <ul className="space-y-3 text-gray-600 list-disc pl-5">

                            <li>Free Shipping on orders above $100.</li>

                            <li>Delivery within 3-5 business days.</li>

                            <li>Easy 30 days return policy.</li>

                            <li>Secure packaging guaranteed.</li>

                        </ul>

                    </div>

                )}

            </div>



            <h2 className="text-3xl font-bold my-[50px]">
                Related Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {relatedProducts.slice(0, 4).map((item) => (

                    <Link to={`/products/${item.id}`}
                        key={item.id}
                        className="border rounded-xl overflow-hidden shadow hover:shadow-lg duration-300"
                    >

                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-60 object-contain bg-gray-100 p-5"
                        />

                        <div className="p-5">

                            <p className="text-sm text-[#AF823D] uppercase">
                                {item.category}
                            </p>

                            <h3 className="text-lg font-semibold mt-2 line-clamp-2">
                                {item.title}
                            </h3>

                            <div className="flex justify-between items-center mt-4">

                                <span className="font-bold text-xl">
                                    ${item.price}
                                </span>

                                <span>
                                    ⭐ {item.rating}
                                </span>

                            </div>

                        </div>

                    </Link>

                ))}

            </div>
        </section>




    );

}

export default ProductDetails;