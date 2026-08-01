export async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
}


export async function getProductById(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json();
    return data;

}

export async function getRelatedProducts(category) {

    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();
    return data.products;


}

export async function getCategories() {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    return data;
}

export async function getProductsByCategory(category) {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();
    return data.products;
}

