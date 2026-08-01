import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategories, getProductsByCategory } from "../services/productService";

function CategoriesSection() {

    const [categories, setCategories] = useState([]);
    const [categoryImages, setCategoryImages] = useState({});

    useEffect(() => {

        async function fetchCategories() {

            try {

                const data = await getCategories();

                setCategories(data);

                const images = {};

                for (const category of data) {

                    const products = await getProductsByCategory(category.slug);

                    if (products.length > 0) {
                        images[category.slug] = products[0].thumbnail;
                    }

                }

                setCategoryImages(images);

            } catch (error) {

                console.error(error);

            }

        }

        fetchCategories();

    }, []);

    return (

        <section className="py-12 md:py-20 bg-[#FAF8F5]">

            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}

                <div className="text-center mb-10 md:mb-16">

                    <span className="uppercase tracking-[3px] md:tracking-[4px] text-[#AF823D] text-xs md:text-sm font-semibold">
                        Browse Collection
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold mt-3">
                        Shop By Categories
                    </h2>

                    <div className="w-20 md:w-24 h-1 bg-[#AF823D] mx-auto mt-5 rounded-full"></div>

                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-7 md:leading-8 text-sm md:text-base">
                        Explore our handpicked collection of premium furniture and
                        home décor crafted to elevate every corner of your home.
                    </p>

                </div>

                {/* Categories */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

                    {categories.slice(0, 5).map((category) => (

                        <Link
                            key={category.slug}
                            to={`/products/category/${category.slug}`}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl duration-300 overflow-hidden"
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={categoryImages[category.slug]}
                                    alt={category.name}
                                    className="w-full h-52 md:h-56 object-cover group-hover:scale-110 duration-500"
                                />

                            </div>

                            <div className="p-5 md:p-6 text-center">

                                <h3 className="text-base md:text-lg font-semibold capitalize group-hover:text-[#AF823D] duration-300">
                                    {category.name.replace(/-/g, " ")}
                                </h3>

                                <p className="mt-2 text-sm text-gray-500">
                                    Explore Collection →
                                </p>

                            </div>

                        </Link>

                    ))}

                </div>

                {/* Button */}

                <div className="flex justify-center mt-10 md:mt-14">

                    <Link
                        to="/categories"
                        className="px-6 md:px-10 py-3 md:py-4 bg-[#AF823D] text-white rounded-full font-semibold hover:bg-black duration-300"
                    >
                        View All Categories
                    </Link>

                </div>

            </div>

        </section>

    );
}

export default CategoriesSection;