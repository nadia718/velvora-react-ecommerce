import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/productService";


function CategoryProduct() {
    const [products, setProducts] = useState([]);
    const { category } = useParams();



    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProductsByCategory(category);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();

    }, [category]);

    return (

        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product) => (

                        <Link to={`/products/${product.id}`}
                            key={product.id}
                            className="block rounded-xl p-6 text-center hover:shadow-xl hover:-translate-y-2 duration-300"
                        >

                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-52 object-cover rounded-xl"
                            />

                            <h3 className="text-lg font-semibold mt-2 ">
                                {product.title}
                            </h3>
                            <h3 className="mt-2 font-semibold text-lg">
                                $ {product.price}
                            </h3>
                            <h3 className="mt-2 font-semibold text-lg">
                                {product.category}
                            </h3>

                        </Link>

                    ))}

                </div>

            </div>

        </section>

    );
}
export default CategoryProduct;