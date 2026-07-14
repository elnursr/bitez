export function MetaItem({ title, icon }) {
    return (
        `
            <li class="career-meta__item career-meta__item--location">
                <svg class="career-meta__icon">
                    <use href="assets/media/svg/icons/icons.svg#icon-${icon}"></use>
                </svg>
                <h2 class="career-meta__title">${title}</h2>
            </li>
        `
    )
}