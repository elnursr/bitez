import { ProducItem } from '../components/ProducItem.js';
import { ProductOption } from '../components/ProductOption.js';

export default function Bitez() {

}

Bitez.prototype.getProductsFromAPI = function (products) {
    const productItems = [];
    const productOptions = []
    for (let i = 0; i < products.length; i++) {
        let { items, category_name } = products[i];
        for (let j = 0; j < items.length; j++) {
            productItems.push({
                items: items[j],
                category_name
            });
            productOptions.push(items[j].options);
        }
    }

    return { productItems, productOptions };
}

Bitez.prototype.renderProductsToUI = function ({ products, productCardElement, productType, productImageExtension, productOptionType }) {

    let htmlContent = '';

    const { productItems, productOptions } = this.getProductsFromAPI(products);

    for (let i = 0; i < productItems.length; i++) {
        let { items, category_name } = productItems[i];
        htmlContent += ProducItem(items, productType, category_name, productImageExtension);
    }

    productCardElement.innerHTML = htmlContent;

    const productOptionsElement = document.querySelectorAll(`.${productType}-option`);

    this.renderOptionsToUI({
        options: productOptions,
        optionType: productOptionType,
        optionsElement: productOptionsElement
    });
}

Bitez.prototype.renderOptionsToUI = function ({ options, optionsElement, optionType }) {

    for (let i = 0; i < options.length; i++) {

        let htmlContent = '';

        for (let j = 0; j < options[i].length; j++) {
            htmlContent += ProductOption(options[i][j], optionType);
        }

        optionsElement[i].innerHTML = htmlContent;
    }
}

Bitez.prototype.renderToUI = function ({ items, itemComponentWrapperElement, itemComponentElement }) {
    let renderedContent = '';

    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
        renderedContent += itemComponentElement(items[i]);
    }
    itemComponentWrapperElement.innerHTML = renderedContent;
}