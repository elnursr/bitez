export function FilterTabItem({ title, isActive }) {
    let activeClass = isActive ? 'filter-tab__item--active' : '';
    return (
        `
            <li class="filter-tab__item ${activeClass}" data-filter-tab="${title}">
                <h2 class="filter-tab__title">${title.replace(/_/g, '-')}</h2>
            </li>    
        `
    )
}