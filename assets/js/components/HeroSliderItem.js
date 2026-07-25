export function HeroSliderItem({ productType, productTitle }) {
    return (
        `
            <li class="hero-slider__item swiper-slide">
                <div class="hero-slider__content">
                    <h3 class="hero-slider__suptitle">hot delicious</h3>
                    <h1 class="hero-slider__title">${productTitle}</h1>
                    <h3 class="hero-slider__subtitle">${productType}</h3>
                    <h4 class="hero-slider__label">100% beef. fresh. halal. handmade</h4>
                </div>
                <div class="hero-slider__image">
                    <img src="assets/media/png/hero/${productTitle}_${productType}.png" alt="${productTitle}">
                </div>
            </li>
        `
    )
}