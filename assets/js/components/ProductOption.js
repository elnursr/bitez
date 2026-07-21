export function ProductOption({ size, label, price, isExtra }, optionType) {
    let extraClass = isExtra ? 'product-option--extra' : '';
    return (
        `
            <li class="product-option ${extraClass}">
                <span class="product-option__size">${size}</span>
                <span class="product-option__label">${label} ${optionType}</span>
            </li>
        `
    )
}
/*<span class="product-option__price">${price}</span>*/