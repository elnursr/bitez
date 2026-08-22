// vendors
import { Swiper } from './vendors/swiper/swiper.min.js';

// components
import { HighLightItem, HeroSliderItem, FollowUsItem, FilterMenuItem, NavigationItem, FooterContactItem, FooterNavigationItem } from './components/index.js';

// configs
import { highLightItems, navigationItems, heroSliderItems, footerContactItems, footerFollowUsItems, sidesFilterMenuItems, wrapsFilterMenuItems, burgerFilterMenuItems, handmadeChickenFilterMenuItems, footerNavigationItems, hotDrinkFilterMenuItems, coolDrinkFilterMenuItems } from './config/index.js';

import Bitez from './bitez/index.js';
import FilterManager from './filter/index.js';
import { DataService } from './services/DataService.js';

// dom
import {
    loadScreenElement,
    highlightCardElement,
    burgerCardElement, handmadeChickenCardElement, sideCardElement, wrapCardElement,
    coolDrinkCardElement, hotDrinkCardElement,
    heroSliderListElement, navigationListElement,
    footerNavigationListElement,
    footerContactListElement, footerFollowUsListElement,
    cookieBannerButton,
    navigationMenuElement
} from './dom/index.js';

const bitez = new Bitez();

const dataService = new DataService();

const filterManager = new FilterManager();

const swiper = new Swiper('.hero-slider', {
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4777,
        disableOnInteraction: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});

// load screen
bitez.disableLoadScreen({
    loadTime: 1993,
    element: loadScreenElement,
    className: 'load-screen--deactive',
});

// hero
bitez.renderToUI({
    items: heroSliderItems,
    itemComponentElement: HeroSliderItem,
    itemComponentWrapperElement: heroSliderListElement
});

// highlight
bitez.renderToUI({
    items: highLightItems,
    itemComponentElement: HighLightItem,
    itemComponentWrapperElement: highlightCardElement
});

// navigation
bitez.renderToUI({
    items: navigationItems,
    itemComponentElement: NavigationItem,
    itemComponentWrapperElement: navigationListElement
});

let navigationLinkElements = document.querySelectorAll('.navigation__link');

bitez.closeMobileMenu({
    linkElements: navigationLinkElements,
    elements: [
        { element: navigationMenuElement, activeClass: 'navigation-menu--active' },
        { element: navigationListElement, activeClass: 'navigation__list--active' }
    ]
});

// footer contact
bitez.renderToUI({
    items: footerContactItems,
    itemComponentElement: FooterContactItem,
    itemComponentWrapperElement: footerContactListElement
});

// footer navigation
bitez.renderToUI({
    items: footerNavigationItems,
    itemComponentElement: FooterNavigationItem,
    itemComponentWrapperElement: footerNavigationListElement
});

// footer follow us
bitez.renderToUI({
    items: footerFollowUsItems,
    itemComponentElement: FollowUsItem,
    itemComponentWrapperElement: footerFollowUsListElement
});

// burger filter menu
bitez.renderToUI({
    items: burgerFilterMenuItems,
    itemComponentElement: FilterMenuItem,
    itemComponentWrapperElement: document.querySelector('.burger-filter-menu')
});

// handmade filter menu
bitez.renderToUI({
    items: handmadeChickenFilterMenuItems,
    itemComponentElement: FilterMenuItem,
    itemComponentWrapperElement: document.querySelector('.handmade-chicken-filter-menu')
});

// side filter menu
bitez.renderToUI({
    items: sidesFilterMenuItems,
    itemComponentElement: FilterMenuItem,
    itemComponentWrapperElement: document.querySelector('.side-filter-menu')
});

// wrap filter menu
bitez.renderToUI({
    items: wrapsFilterMenuItems,
    itemComponentElement: FilterMenuItem,
    itemComponentWrapperElement: document.querySelector('.wrap-filter-menu')
});

// cool-drink filter menu
bitez.renderToUI({
    items: coolDrinkFilterMenuItems,
    itemComponentElement: FilterMenuItem,
    itemComponentWrapperElement: document.querySelector('.cool-drink-filter-menu')
});

// hot-drink filter menu
bitez.renderToUI({
    items: hotDrinkFilterMenuItems,
    itemComponentElement: FilterMenuItem,
    itemComponentWrapperElement: document.querySelector('.hot-drink-filter-menu')
});

// burgers
dataService.fetchData('../assets/json/de/burgers.json')
    .then(({ burgers }) => {

        bitez.renderDataToUI({
            products: burgers,
            productType: 'burgers',
            productOptionType: 'patty',
            productImageExtension: 'webp',
            productCardElement: burgerCardElement
        });

        filterManager.filterMenu({
            menuActiveClassName: 'filter-menu__item--active',
            itemActiveClassName: 'product-card__item--active',
            filteredItems: document.querySelectorAll('.burger-card .product-card__item'),
            filterMenuItems: document.querySelectorAll('.burger-filter-menu .filter-menu__item')
        });
    })

// handmade-chickens
dataService.fetchData('../assets/json/de/handmade-chickens.json')
    .then(({ handmade_chickens }) => {

        bitez.renderDataToUI({
            products: handmade_chickens,
            productType: 'handmade-chickens',
            productOptionType: 'er',
            productImageExtension: 'webp',
            productCardElement: handmadeChickenCardElement
        });

        filterManager.filterMenu({
            menuActiveClassName: 'filter-menu__item--active',
            itemActiveClassName: 'product-card__item--active',
            filteredItems: document.querySelectorAll('.handmade-chicken-card .product-card__item'),
            filterMenuItems: document.querySelectorAll('.handmade-chicken-filter-menu .filter-menu__item')
        });
    })

// wraps
dataService.fetchData('../assets/json/de/wraps.json')
    .then(({ wraps }) => {

        bitez.renderDataToUI({
            products: wraps,
            productType: 'wraps',
            productOptionType: 'portion',
            productImageExtension: 'webp',
            productCardElement: wrapCardElement
        });

        filterManager.filterMenu({
            menuActiveClassName: 'filter-menu__item--active',
            itemActiveClassName: 'product-card__item--active',
            filteredItems: document.querySelectorAll('.wrap-card .product-card__item'),
            filterMenuItems: document.querySelectorAll('.wrap-filter-menu .filter-menu__item')
        });
    })

// sides
dataService.fetchData('../assets/json/de/sides.json')
    .then(({ sides }) => {

        bitez.renderDataToUI({
            products: sides,
            productType: 'sides',
            productOptionType: 'portion',
            productImageExtension: 'webp',
            productCardElement: sideCardElement
        });

        filterManager.filterMenu({
            menuActiveClassName: 'filter-menu__item--active',
            itemActiveClassName: 'product-card__item--active',
            filteredItems: document.querySelectorAll('.side-card .product-card__item'),
            filterMenuItems: document.querySelectorAll('.side-filter-menu .filter-menu__item')
        });
    })

// cool-drinks
dataService.fetchData('../assets/json/de/cool-drinks.json')
    .then(({ cool_drinks }) => {
        bitez.renderDataToUI({
            products: cool_drinks,
            productType: 'cool-drinks',
            productImageExtension: 'webp',
            productCardElement: coolDrinkCardElement
        });

        filterManager.filterMenu({
            menuActiveClassName: 'filter-menu__item--active',
            itemActiveClassName: 'product-card__item--active',
            filteredItems: document.querySelectorAll('.cool-drink-card .product-card__item'),
            filterMenuItems: document.querySelectorAll('.cool-drink-filter-menu .filter-menu__item')
        });
    })

// hot-drinks
dataService.fetchData('../assets/json/de/hot-drinks.json')
    .then(({ hot_drinks }) => {
        bitez.renderDataToUI({
            products: hot_drinks,
            productType: 'hot-drinks',
            productOptionType: 'shot',
            productImageExtension: 'webp',
            productCardElement: hotDrinkCardElement
        });

        filterManager.filterMenu({
            menuActiveClassName: 'filter-menu__item--active',
            itemActiveClassName: 'product-card__item--active',
            filteredItems: document.querySelectorAll('.hot-drink-card .product-card__item'),
            filterMenuItems: document.querySelectorAll('.hot-drink-filter-menu .filter-menu__item')
        });
    })

// career
// dataService.fetchData('../assets/json/careers.json')
//     .then(({ careers }) => {
//         bitez.renderToUI({
//             items: careers,
//             itemComponentElement: CareerItem,
//             itemComponentWrapperElement: document.querySelector('.career-card')
//         });
//     })

cookieBannerButton.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.setItem('isUnderstood', true);
    document.querySelector('.cookie-banner').classList.add('cookie-banner--deactive');
});

let isUnderstood = localStorage.getItem('isUnderstood');
if (Boolean(isUnderstood)) {
    document.querySelector('.cookie-banner').classList.add('cookie-banner--deactive');
}

navigationMenuElement.addEventListener('click', function (e) {
    e.preventDefault();
    navigationMenuElement.classList.toggle('navigation-menu--active');
    navigationListElement.classList.toggle('navigation__list--active');
});