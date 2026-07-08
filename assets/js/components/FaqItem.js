export function FaqItem({ title, description }) {
    return (
        `
            <li class="faq-accordion__item">
                <div class="faq-accordion__head">
                    <h1 class="faq-accordion__title">${title}</h1>
                    <span class="faq-accordion__icon">
                        <svg viewBox="0 0 24 24">
                            <use href="assets/media/svg/icons/icons.svg#icon-plus"></use>
                        </svg>
                    </span>
                </div>
                <div class="faq-accordion__body">
                    <p class="faq-accordion__description">${description}</p>
                </div>
            </li>
        `
    )
}