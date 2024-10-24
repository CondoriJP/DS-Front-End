import { handleSaveProductsLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore } from "../views/store";
import { productActive } from "../../main";

/* === PRODUCTOS === */
// Funciones guardar o modificar elementos
export const handleSaveorModify = () => {
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
