export function ProducItem({ title, ingredients }, productType, categoryName, imageExtension) {
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
                        <img src="assets/media/${imageExtension}/${productType}/${title}.${imageExtension}" alt="${title}">
                    </a>
                </div>
            </li>
        `
    )
}

/*<div class="product-card__certificate">
    <svg class="product-card__icon" viewBox="0 0 500 500">
        <use href="assets/media/svg/icons/icons.svg#icon-halal"></use>
    </svg>
</div>*/

/*<li class="product-card__item product-card__item--active" data-filter-category="${categoryName}">
   <h1 class="product-card__title" title="${title.replace(/_/g, ' ')}">${title.replace(/_/g, ' ')}</h1>
   <a href="" class="product-card__link">
       <img src="assets/media/${imageExtension}/${productType}/${title}.${imageExtension}" alt="${title}">
   </a>
   <ul class="product-options ${productType}-option"></ul>
   <p class="product-card__description">${description}</p>
</li>*/

/*<li class="product-card__item product-card__item--active" data-filter-category="${categoryName}">
    <div class="product-card__left-side">
        <h1 class="product-card__title" title="${title.replace(/_/g, ' ')}">hamburger</h1>
        <p class="product-card__description">
            Smashed Beef Patty, American Cheese, Iceberg lettuce, diced onion, gherkin, Chilli peppers,
            Chili-Cheese Sauce
        </p>
        <ul class="product-options ${productType}-option">
            <li class="product-option ${extraClass}">
                <span class="product-option__size">m</span>
                <span class="product-option__label">single patty</span>
            </li>
            <li class="product-option product-option--extra">
                <span class="product-option__size">xl</span>
                <span class="product-option__label">double patty</span>
            </li>
        </ul>
    </div>
    <div class="product-card__right-side">
        <a href="" class="product-card__link">
            <img src="assets/media/png/burgers/hamburger.png" alt="${title}">
        </a>
    </div>
</li>*/