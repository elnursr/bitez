import { ProducItem } from '../components/ProducItem.js';
import { ProductOption } from '../components/ProductOption.js';

export default function Bitez() {
}

Bitez.prototype.getData = function (data) {
    const productItems = [];
    const productOptions = []
    for (let i = 0; i < data.length; i++) {
        let { items, category_name } = data[i];
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

Bitez.prototype.renderDataToUI = function ({ products, productCardElement, productType, productImageExtension, productOptionType }) {

    let htmlContent = '';

    const { productItems, productOptions } = this.getData(products);

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

Bitez.prototype.careersMetaToUI = function ({ metaInfos, metaComponentWrapperElement, metaComponentElement }) {
    let renderedContent = '';

    for (let i = 0; i < metaInfos.length; i++) {
        let { title, icon } = metaInfos[i];
        renderedContent += metaComponentElement({ title, icon });
    }
    metaComponentWrapperElement.innerHTML = renderedContent;
}

Bitez.prototype.renderToUI = function ({ items, itemComponentWrapperElement, itemComponentElement }) {
    let renderedContent = '';

    for (let i = 0; i < items.length; i++) {
        renderedContent += itemComponentElement(items[i]);
    }
    itemComponentWrapperElement.innerHTML = renderedContent;
}

Bitez.prototype.removeActiveClass = function (elements) {
    for (let i = 0; i < elements.length; i++) {
        let { element, activeClass } = elements[i];
        element.classList.remove(activeClass);
    }
}

Bitez.prototype.closeMobileMenu = function ({ linkElements, elements }) {
    for (let i = 0; i < linkElements.length; i++) {
        linkElements[i].addEventListener('click', function () {
            this.removeActiveClass(elements);
        }.bind(this));
    }
}

Bitez.prototype.disableLoadScreen = function ({ element, className, loadTime }) {
    setTimeout(function () {
        element.classList.add(className);
    }, loadTime);
}