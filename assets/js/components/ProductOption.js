export function ProductOption({ size, label, isExtra }, optionType) {
    let extraClassName = isExtra ? 'product-option--extra' : '';
    return (
        `
            <li class="product-option ${extraClassName}">
                <span class="product-option__size">${size}</span>
                <span class="product-option__label">${label} ${optionType}</span>
            </li>
        `
    )
}

/*<span class="product-option__price">${option.price}</span>*/