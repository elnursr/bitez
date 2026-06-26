export function ProductCardItem(items, productType, categoryName, imageExtension) {
    return (
        `
            <li class="product-card__item product-card__item--active" data-filter-category="${categoryName}">
                <h1 class="product-card__title">${items.title.replace(/_/g, ' ')}</h1>
                <a href="" class="product-card__link">
                    <img src="assets/media/${imageExtension}/${productType}/${items.title}.${imageExtension}" alt="${items.title}">
                </a>
                <ul class="product-options ${productType}-option"></ul>
                <p class="product-card__content">${items.content}</p>
                <div class="product-card__certificate">
                    <img src="assets/media/svg/certificate/halal.svg" alt="halal.svg">
                </div>
            </li>
        `
    )
}