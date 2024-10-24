import { handleGetProductsLocalStorage } from "../persistence/localStorage";
import { categoriesActive } from "../../main";
import { handleRenderList } from "../views/store";
// Render de la vista categorias

/* === CATEGORIAS === */

export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
        <li id="todo">Todos los productos</li>
        <li id="Hamburguesas">Hamburguesa</li>
        <li id="Papas">Papas</li>
        <li id="Gaseosas">Gaseosas</li>
        <li id="mayorPrecio">Mayor Precio</li>
        <li id="menorPrecio">Menor Precio</li> 
    `;
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((li) => {
        li.addEventListener("click", () => {
            handleClick(li);
        });
    });
    const handleClick = (element) => {
        handleFilterByCategory(element.id);
        liElements.forEach((li) => {
            if (li.classList.contains("liActive")) {
                li.classList.remove("liActive");
            } else if (element === li) {
                element.classList.add("liActive");
            }
        });
    };
};


/* === FILTROS === */

const handleFilterByCategory = (category) => {
    const products = handleGetProductsLocalStorage();
    switch (category) {
        case categoriesActive:
            handleRenderList(products);
            break;
        case "todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const filterProducts = products.filter((item) => item.categoria === category);
            handleRenderList(filterProducts);
            break;
        default:
            break

    };
};
