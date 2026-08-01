import CategoriesSection from "../components/CategoriesSection";
import ProductGrid from "../components/ProductGrid";
import Slider from "../components/Slider";
import { useState, useEffect } from "react";
import { getProducts } from "../services/productService";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonial";
import ContactSection from "../components/ContactUs";

function Home() {
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

    const latestProducts = products.slice(0, 6);

    return (
        <>
            <Slider />

            <CategoriesSection />

            <About />

            <section className="max-w-7xl mx-auto px-4 py-12 md:pb-20">

                <div className="text-center mb-10 md:mb-12">

                    <span className="text-[#AF823D] uppercase tracking-[3px] md:tracking-widest font-medium text-xs md:text-sm">
                        New Collection
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        Featured Products
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-7">
                        Discover our carefully selected premium products designed to
                        elevate your everyday lifestyle.
                    </p>

                </div>

                <ProductGrid
                    products={latestProducts}
                    showPagination={false}
                    showViewMore={true}
                />

            </section>

            <WhyChooseUs />
            <Testimonials />
            <ContactSection />

        </>
    );
}

export default Home;