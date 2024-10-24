/*=== LOCALSTORAGE ===*/
// trae los datos del localstorage
export const handleGetProductsLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    } else {
        return [];
    }
};

// guardar los datos en el localstorage
export const handleSaveProductsLocalStorage = (products) => {
    //traer los elementos del localStorage
    let productsLocalStorage = handleGetProductsLocalStorage();

    const existingIndex = productsLocalStorage.findIndex((productLS) => productLS.id === products.id);
    if (existingIndex !== -1) {
        productsLocalStorage[existingIndex] = products;
    } else {
        productsLocalStorage.push(products);
    }
    localStorage.setItem("products", JSON.stringify(productsLocalStorage));
};
