export function NavigationItem({ title, url }) {
    return (
        `
            <li class="navigation__item">
                <a href="${url}" class="navigation__link">${title}</a>
            </li>
        `
    )
}