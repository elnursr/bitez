export function FilterMenuItem({ title, isActive }) {
    let activeClass = isActive ? 'filter-menu__item--active' : '';
    return (
        `
            <li class="filter-menu__item ${activeClass}" data-filter-category="${title}">
                <h2 class="filter-menu__title">${title.replace(/_/g, '-')}</h2>
            </li>    
        `
    )
}