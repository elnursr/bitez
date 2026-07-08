export function DesktopNavigationItem({ title, url }) {
    return (
        `
            <li class="desktop-navigation__item">
                <a href="${url}" class="desktop-navigation__link">${title}</a>
            </li>
        `
    )
}