import { setProductActive } from '../../main';
import { openModal } from '../../main';
import { handleGetProductsLocalStorage } from '../persistence/localStorage';

/* === STORE === */

export const handleGetProductsToStore = () => {
    const products = handleGetProductsLocalStorage();
    handleRenderList(products);
};

export const handleRenderList = (products) => {
    const burgerList = products.filter((item) => item.categoria === 'Hamburguesas');
    const gaseosaList = products.filter((item) => item.categoria === 'Gaseosas');
    const papasList = products.filter((item) => item.categoria === 'Papas');

    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index)=>{
                return `
                    <div id='product-${producto.categoria}-${index}' class="product__item">
                        <div class="product__item__img">
                            <img src='${producto.imagen}'>
                        </div>
                        <div class="product__item__info">
                            <h3 class="product__item__info__tittle">${producto.nombre}</h3>
                            <div class="product__item__info__description">
                                <p><b>Precio: </b>$${producto.precio}</p> 
                            </div>
                        </div>
                    </div>
                `;
            });
            return `
                <section class="product__group">
                    <div class="product__group__title">
                        <h2>${title}</h2>
                    </div>
                    <div class="product__group__list">
                        ${productosHTML.join("")}
                    </div>
                </section>
            `;
        } else {
            return '';
        }
    };

    // Renderizar productos en el HTML
    const appContainer = document.getElementById('storeContainer');
    appContainer.innerHTML = `
        ${renderProductGroup(burgerList, 'Hamburguesas')}
        ${renderProductGroup(gaseosaList, 'Gaseosas')}
        ${renderProductGroup(papasList, 'Papas')}
    `;

    // Agregar eventos a los productos dinamicamente
    const addEvents = (product) => {
        product.forEach((elemento, index) => {
            const productContainer = document.getElementById(`product-${elemento.categoria}-${index}`);
            productContainer.addEventListener('click', () => {
                setProductActive(elemento);
                openModal();
            });
        });
    };
    addEvents(burgerList);
    addEvents(gaseosaList);
    addEvents(papasList);
};
