import { handleGetProductsLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () => {
    const inputSearch = document.getElementById("headerSearchInputSearch");
    const products = handleGetProductsLocalStorage();

    const filterProducts = products.filter((item) => 
        item.nombre.toLowerCase().includes(inputSearch.value.toLowerCase())
    );
    console.log(inputSearch.value);
    console.log(filterProducts);
    console.log(products);
    handleRenderList(filterProducts);
};
