import { handleSaveProductsLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";

renderCategories();

/* === PRODUCTOS === */
const buttonAdd = document.getElementById("headerSearchBagregarelem");
buttonAdd.addEventListener("click", () => {
    openModal();
});


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

/* === POPUP === */
const buttonCancel = document.getElementById("popUP_ButCancel");
buttonCancel.addEventListener("click", () => {
    closeModal();
});

// Funciones para abrir y cerrar el modal
export const openModal = () => {
    const modal = document.getElementById("modalpopUP");
    modal.style.display = "flex";
    if (productActive) {
        const nombre = document.getElementById("popUP_nombre");
        const precio = document.getElementById("popUP_precio");
        const categoria = document.getElementById("popUP_categoria");
        const imagen = document.getElementById("popUP_img");
        nombre.value = productActive.nombre;
        precio.value = productActive.precio;
        categoria.value = productActive.categoria;
        imagen.value = productActive.imagen;
    }
}

export const closeModal = () => {
    const modal = document.getElementById("modalpopUP");
    modal.style.display = "none";
    resetModal();
    setProductActive(null);
};;

const resetModal = () => {
    const nombre = document.getElementById("popUP_nombre");
    const precio = document.getElementById("popUP_precio");
    const categoria = document.getElementById("popUP_categoria");
    const imagen = document.getElementById("popUP_img");
    nombre.value = "";
    precio.value = "";
    categoria.value = "Seleccione una categoria";
    imagen.value = "";
};

// Funciones guardar o modificar elementos
const buttonAccept = document.getElementById("popUP_ButAccept");
buttonAccept.addEventListener("click", () => {
    handleSaveorModify();
});

const handleSaveorModify = () => {
    const nombre = document.getElementById("popUP_nombre").value;
    const precio = document.getElementById("popUP_precio").value;
    const categoria = document.getElementById("popUP_categoria").value;
    const imagen = document.getElementById("popUP_img").value;
    let object = null;

    if(productActive){
        object = {
            ...productActive,
            nombre,
            precio,
            categoria,
            imagen,
        };
    } else { 
        object = {
            id: new Date().toISOString(),
            nombre,
            precio,
            categoria,
            imagen,
        };
    }

    handleSaveProductsLocalStorage(object);

    handleGetProductsToStore();

    closeModal();
};


