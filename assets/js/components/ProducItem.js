export function ProducItem({ title, ingredients }, productType, categoryName, extensionType) {
    return (
        `
            <li class="product-card__item product-card__item--active" data-filter-category="${categoryName}">
                <div class="product-card__left-side">
                    <h1 class="product-card__title" title="${title.replace(/_/g, ' ')}">${title.replace(/_/g, ' ')}</h1>
                    <p class="product-card__description">${ingredients}</p>
                    <ul class="product-options ${productType}-option"></ul>
                </div>
                <div class="product-card__right-side">
                    <a href="" class="product-card__link">
                        <img src="assets/media/${extensionType}/${productType}/${categoryName}/${title}.${extensionType}" alt="${title}">
                    </a>
                </div>
            </li>
        `
    )
}