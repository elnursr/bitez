export function FollowUsItem({ icon, url }) {
    return (
        `
            <li class="footer-follow-us__item">
                <a href="${url}" class="footer-follow-us__link" target="_blank">
                    <svg class="footer-follow-us__icon">
                        <use href="assets/media/svg/icons/icons.svg#icon-${icon}"></use>
                    </svg>
                </a>
            </li>
        `
    )
}