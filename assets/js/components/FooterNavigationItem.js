export function FooterNavigationItem({ title, url, icon }) {
    return (
        `
            <li class="footer-navigation__item">
                <a href="${url}" class="footer-navigation__link">
                    <svg class="footer-navigation__icon">
                        <use href="assets/media/svg/icons/icons.svg#icon-${icon}"></use>
                    </svg>
                    <h2 class="footer-navigation__title">${title}</h2>
                </a>
            </li>
        `
    )
}