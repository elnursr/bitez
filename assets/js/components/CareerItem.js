export function CareerItem({ title, description }) {
    return (
        `
            <li class="career-card__item">
                <h1 class="career-card__title">${title}</h1>
                <p class="career-card__description">${description}</p>
                <ul class="career-meta">
                    <li class="career-meta__item career-meta__item--location">
                        <svg class="career-meta__icon">
                            <use href="assets/media/svg/icons/icons.svg#icon-location"></use>
                        </svg>
                        <h2 class="career-meta__title">kohln</h2>
                    </li>
                    <li class="career-meta__item career-meta__item--type">
                        <svg class="career-meta__icon">
                            <use href="assets/media/svg/icons/icons.svg#icon-time"></use>
                        </svg>
                        <h2 class="career-meta__title">full time</h2>
                    </li>
                </ul>
                <a href="mailto:" class="career-card__link">apply now</a>
            </li>
        `
    )
}