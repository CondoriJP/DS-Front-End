import { setProductActive, productActive } from "../../main";
import { handleSaveorModify } from "../services/product";

/* === POPUP === */
const buttonCancel = document.getElementById("popUP_ButCancel");
buttonCancel.addEventListener("click", () => {
    closeModal();
});

const buttonAccept = document.getElementById("popUP_ButAccept");
buttonAccept.addEventListener("click", () => {
    handleSaveorModify();
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
