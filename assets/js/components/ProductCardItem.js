export function ProductCardItem({title,content}, productType, categoryName, imageExtension) {
    return (
        `
            <li class="product-card__item product-card__item--active" data-filter-category="${categoryName}">
                <h1 class="product-card__title">${title.replace(/_/g, ' ')}</h1>
                <a href="" class="product-card__link">
                    <img src="assets/media/${imageExtension}/${productType}/${title}.${imageExtension}" alt="${title}">
                </a>
                <ul class="product-options ${productType}-option"></ul>
                <p class="product-card__content">${content}</p>
                <div class="product-card__certificate">
                    <svg class="product-card__icon" viewBox="0 0 201 201">
                        <use href="assets/media/svg/icons/icons.svg#icon-halal"></use>
                    </svg>
                </div>
            </li>
        `
    )
}