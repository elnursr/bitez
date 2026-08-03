export function HighLightItem({ title, text, icon, view_box }) {
    return (
        `
            <li class="highlights__item">
                <div class="highlights__icon">
                    <svg viewBox="${view_box}">
                        <use href="assets/media/svg/icons/icons.svg#icon-${icon}"></use>
                    </svg>
                </div>
                <div class="highlights__content">
                    <h3 class="highlights__title">${title}</h3>
                    <p class="highlights__text">${text}</p>
                </div>
            </li>
        `
    )
}