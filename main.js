import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import { openModal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/services/seachBar";

renderCategories();


/* === APLICACION === */
handleGetProductsToStore();
renderCategories();

export let categoriesActive = null;
export const setCategoriesActive = (category) => {
    categoriesActive = category;
};

export let productActive = null;
export const setProductActive = (product) => {
    productActive = product;
};

/* === HEADER === */
const buttonAdd = document.getElementById("headerSearchBagregarelem");
buttonAdd.addEventListener("click", () => {
    openModal();
});

const buttonSearch = document.getElementById("headerSearchBsearch");
buttonSearch.addEventListener("click", () => {
    handleSearchProductByName();
});
