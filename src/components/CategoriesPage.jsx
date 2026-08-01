import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategories, getProductsByCategory } from "../services/productService";

function CategoriesPage() {

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

                console.error("Error fetching categories:", error);

            }

        }

        fetchCategories();

    }, []);
    return (

        <section className="py-12 md:py-20 bg-[#FAF8F5]">

            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}

                <div className="text-center mb-10 md:mb-16">

                    <span className="uppercase tracking-[3px] md:tracking-[4px] text-[#AF823D] text-xs sm:text-sm font-semibold">
                        Explore Collection
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                        Shop By Category
                    </h2>

                    <div className="w-20 md:w-24 h-1 bg-[#AF823D] mx-auto mt-5 rounded-full"></div>

                    <p className="text-gray-500 mt-6 max-w-2xl mx-auto leading-7 md:leading-8 text-sm sm:text-base">
                        Browse our carefully selected luxury home décor collections.
                        From elegant furniture to stylish accessories, discover
                        everything you need to transform your home.
                    </p>

                </div>

                {/* Categories */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">

                    {categories.map((category) => (

                        <Link
                            key={category.slug}
                            to={`/products/category/${category.slug}`}
                            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl duration-300 overflow-hidden"
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={categoryImages[category.slug]}
                                    alt={category.name}
                                    className="w-full h-52 sm:h-56 object-cover group-hover:scale-110 duration-500"
                                />

                            </div>

                            <div className="p-5 md:p-6 text-center">

                                <h3 className="text-base md:text-lg font-semibold capitalize group-hover:text-[#AF823D] duration-300">

                                    {category.name.replace(/-/g, " ")}

                                </h3>

                                <p className="mt-2 text-xs md:text-sm text-gray-500">
                                    Explore Collection →
                                </p>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default CategoriesPage;