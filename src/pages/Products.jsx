import { getProducts, getProductsByCategory } from "../services/productService";
import ProductGrid from "../components/ProductGrid";
import { useEffect, useState } from "react";
import TopFilter from "../components/TopFilter";
import Sidebar from "../components/Sidebar";

function Products() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [priceRange, setPriceRange] = useState(500);
    const [sortOption, setSortOption] = useState("default");

    useEffect(() => {

        async function fetchProducts() {

            try {

                if (selectedCategory === "all") {

                    const data = await getProducts();
                    setProducts(data);

                } else {

                    const data = await getProductsByCategory(selectedCategory);
                    setProducts(data);

                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }

        }

        fetchProducts();

    }, [selectedCategory]);


    const filteredProducts = products.filter(
        (product) => product.price <= priceRange
    );

    const sortedProducts = [...filteredProducts];

    if (sortOption === "lowToHigh") {
        sortedProducts.sort((product1, product2) => product1.price - product2.price)
    } else if (sortOption === "highToLow") {
        sortedProducts.sort((product1, product2) => product2.price - product1.price)

    }

    return (
        <>
            {/* Banner */}

            <section className="bg-[#F8F4EF] py-10 md:py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold">Shop</h1>

                    <p className="text-gray-500 mt-3 text-sm md:text-base">
                        Home / Products
                    </p>
                </div>
            </section>

            {/* Main Section */}

            <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">

                {/* Top Filter */}

                <div className="mb-6">
                    {/* <TopFilter products={products} /> */}
                    <TopFilter
                        products={filteredProducts}
                        sortOption={sortOption}
                        setSortOption={setSortOption}

                    />
                </div>

                {/* Sidebar + Grid */}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Sidebar */}

                    <Sidebar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                    />

                    {/* Product Grid */}

                    <div className="col-span-12 lg:col-span-9">

                        <ProductGrid
                            // products={products}
                            // showPagination={true}
                            products={sortedProducts}
                            showPagination={true}
                            showViewMore={false}
                        />

                    </div>

                </div>

            </section>
        </>
    );
}

export default Products;