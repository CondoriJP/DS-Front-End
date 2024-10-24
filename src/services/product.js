import { handleSaveProductsLocalStorage, handleGetProductsLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";
import { productActive } from "../../main";
import Swal from "sweetalert2";

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
    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
}   );
    handleSaveProductsLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
};

// Funcion eliminar elementos
export const handleDeleteProduct = () => {
    Swal.fire({
        title: "¿Desea eliminar el producto?",
        text: "la operación es permanente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "SI, eliminar!",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Eliminado!",
                text: "El producto fue eliminado.",
                icon: "success"
            });
            const products = handleGetProductsLocalStorage();
            const result = products.filter((product) => product.id !== productActive.id);
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductsLocalStorage();
            handleRenderList(newProducts);
            closeModal();
        } else {
            closeModal();
        }
    });
}
