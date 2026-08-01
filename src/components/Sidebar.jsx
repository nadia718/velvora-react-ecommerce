import { useEffect, useState } from "react";
import { getCategories } from "../services/productService";

function Sidebar({ selectedCategory, setSelectedCategory, priceRange, setPriceRange }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        async function fetchCategories() {

            try {

                const data = await getCategories();
                setCategories(data);

            } catch (error) {

                console.error("Error fetching categories:", error);
            }
        }
        fetchCategories();
    }, []);

    return (

        <aside className="col-span-12 lg:col-span-3">

            <div className="bg-white rounded-xl shadow p-6 ">

                <h3 className="text-xl font-bold mb-6">
                    Filters
                </h3>

                {/* Categories */}

                <div className="mb-8">

                    <h4 className="font-semibold mb-4">
                        Categories
                    </h4>

                    <div className="space-y-3">

                        {/* All Categories */}

                        <label className="flex items-center gap-3 cursor-pointer">

                            <input
                                type="radio"
                                name="category"
                                value="all"
                                checked={selectedCategory === "all"}
                                onChange={() => setSelectedCategory("all")}
                            />

                            <span>All Categories</span>

                        </label>

                        {/* Dynamic Categories */}

                        {categories.map((category) => (

                            <label
                                key={category.slug}
                                className="flex items-center gap-3 cursor-pointer"
                            >

                                <input
                                    type="radio"
                                    name="category"
                                    value={category.slug}
                                    checked={selectedCategory === category.slug}
                                    onChange={() =>
                                        setSelectedCategory(category.slug)
                                    }
                                />

                                <span className="capitalize">
                                    {category.name.replace(/-/g, " ")}
                                </span>

                            </label>

                        ))}

                    </div>

                </div>

                {/* Price */}

                <div>

                    <h4 className="font-semibold mb-3">
                        Price
                    </h4>

                    <input
                        type="range"
                        min="0"
                        max="500"
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        className="w-full"
                    />

                    <p className="mt-2 text-sm text-gray-600">
                        Max Price: ${priceRange}
                    </p>

                </div>

            </div>

        </aside>

    );
}

export default Sidebar;