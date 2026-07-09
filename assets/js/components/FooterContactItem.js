export function FooterContactItem({ label, icon, url, value }) {
    return (
        `
            <li class="footer-contact__item">
                <a href="${url}" class="footer-contact__link">
                    <svg class="footer-contact__icon">
                        <use href="assets/media/svg/icons/icons.svg#icon-${icon}"></use>
                    </svg>
                    <div class="footer-contact__info">
                        <span class="footer-contact__label">${label}</span>: <h2 class="footer-contact__value">${value}</h2>
                    </div>
                </a>
            </li>
        `
    )
}