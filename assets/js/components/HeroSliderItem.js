export function HeroSliderItem({ categoryName, productTitle, folderName }) {
    return (
        `
            <li class="hero-slider__item swiper-slide">
                <div class="hero-slider__content">
                    <h3 class="hero-slider__suptitle">heiß lecker</h3>
                    <h1 class="hero-slider__title">${productTitle.replace(/_/g, ' ')}</h1>
                    <h3 class="hero-slider__subtitle">${categoryName}</h3>
                    <h4 class="hero-slider__label">100% beef. frisch. halal. handgefertigt</h4>
                </div>
                <div class="hero-slider__image">
                    <img src="assets/media/webp/hero/${folderName}/${categoryName}/${productTitle}.webp" alt="${productTitle}">
                </div>
            </li>
        `
    )
}