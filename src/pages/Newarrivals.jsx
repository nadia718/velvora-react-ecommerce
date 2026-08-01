import ProductGrid from "../components/ProductGrid";
import { getProducts } from "../services/productService";
import { useEffect, useState } from "react";

function NewArrivals() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, []);

    const latestProducts = products.slice(0, 8);

    return (
        <section className="py-20 bg-[#FAF8F5]">

            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}

                <div className="text-center mb-14">

                    <span className="uppercase tracking-[4px] text-[#AF823D] text-sm font-semibold">
                        Latest Collection
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        New Arrivals
                    </h2>

                    <div className="w-24 h-1 bg-[#AF823D] mx-auto mt-5 rounded-full"></div>

                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-8">
                        Discover our newest collection of premium furniture and home décor,
                        carefully selected to bring elegance, comfort, and timeless style
                        into your living space.
                    </p>

                </div>

                <ProductGrid
                    products={latestProducts}
                    showPagination={false}
                />

            </div>

        </section>
    );
}

export default NewArrivals;