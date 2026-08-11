export function HighLightItem({ title, text, icon, view_box }) {
    return (
        `
            <li class="highlight__item">
                <div class="highlight__icon">
                    <svg viewBox="${view_box}">
                        <use href="assets/media/svg/icons/icons.svg#icon-${icon}"></use>
                    </svg>
                </div>
                <div class="highlight__content">
                    <h3 class="highlight__title">${title}</h3>
                    <p class="highlight__text">${text}</p>
                </div>
            </li>
        `
    )
}