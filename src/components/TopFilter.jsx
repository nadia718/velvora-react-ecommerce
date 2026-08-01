import { FaFilter, FaThLarge } from "react-icons/fa";



function TopFilter({ products, sortOption, setSortOption }) {


    return (
        <div className="bg-white shadow rounded-xl p-5 flex justify-between items-center mb-8">

            <div className="flex items-center gap-3">

                <FaFilter />

                <span className="font-semibold">
                    Showing {products.length} Products
                </span>

            </div>

            <div className="flex items-center gap-4">

                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="border rounded-lg px-4 py-2 outline-none"
                >

                    <option value="default">Default Sorting</option>

                    <option value="lowToHigh">
                        Price Low to High
                    </option>

                    <option value="highToLow">
                        Price High to Low
                    </option>

                </select>

                <button className="border p-3 rounded-lg">

                    <FaThLarge />

                </button>

            </div>

        </div>
    )
}

export default TopFilter;