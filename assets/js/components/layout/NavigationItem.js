export function NavigationItem({ title, url, isActive }) {
    let activeClass = isActive ? 'navigation__link--active' : '';
    return (
        `
            <li class="navigation__item">
                <a href="${url}" class="navigation__link ${activeClass}">${title}</a>
            </li>
        `
    )
}