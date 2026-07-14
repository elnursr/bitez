export function CareerItem({ title, meta, description }) {
    return (
        `
            <li class="career-card__item">
                <h1 class="career-card__title">${title}</h1>
                <p class="career-card__description">${description}</p>
                <ul class="career-meta"></ul>
                <a href="mailto:" class="career-card__link">apply now</a>
            </li>
        `
    )
}