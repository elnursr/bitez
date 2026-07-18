// import default configs
import navigationItems from './config/navigationItems.js';
import footerContactItems from './config/footerContactItems.js';
import footerFollowUsItems from './config/footerFollowUsItems.js';
import burgerFilterMenuItems from './config/burgerFilterMenuItems.js';
import footerNavigationItems from './config/footerNavigationItems.js';
import softDrinkFilterMenuItems from './config/softDrinkFilterMenuItems.js';

import { FaqItem } from './components/FaqItem.js';
import { CareerItem } from './components/CareerItem.js';
import { FollowUsItem } from './components/FollowUsItem.js';
import { FilterMenuItem } from './components/FilterMenuItem.js';
import { NavigationItem } from './components/NavigationItem.js';
import { FooterContactItem } from './components/FooterContactItem.js'
import { FooterNavigationItem } from './components/FooterNavigationItem.js';

import Bitez from './bitez/index.js';
import Accordion from './accordion/index.js'
import FilterManager from './filter/index.js';

import { DataService } from './services/DataService.js';

import {
    burgerCardElement, softDrinkCardElement,
    navigationListElement,
    footerNavigationListElement,
    footerContactListElement, footerFollowUsListElement,
    syncActiveClasses
} from './dom/index.js';

// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

// let swiper = new Swiper('.hero', {
//     spaceBetween: 0,
//     centeredSlides: true,
//     autoplay: {
//         delay: 3555,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         prevEl: '.swiper-button-prev',
//         nextEl: '.swiper-button-next',
//     },
// });

const bitez = new Bitez();

const dataService = new DataService();

const filterManager = new FilterManager();

bitez.renderToUI({
    items: navigationItems,
    itemComponentElement: NavigationItem,
    itemComponentWrapperElement: navigationListElement
});

bitez.renderToUI({
    items: footerFollowUsItems,
    itemComponentElement: FollowUsItem,
    itemComponentWrapperElement: footerFollowUsListElement
});

bitez.renderToUI({
    items: footerContactItems,
    itemComponentElement: FooterContactItem,
    itemComponentWrapperElement: footerContactListElement
});

bitez.renderToUI({
    items: footerNavigationItems,
    itemComponentElement: FooterNavigationItem,
    itemComponentWrapperElement: footerNavigationListElement
});

bitez.renderToUI({
    items: burgerFilterMenuItems,
    itemComponentElement: FilterMenuItem,
    itemComponentWrapperElement: document.querySelector('.burger-filter-menu')
});

bitez.renderToUI({
    items: softDrinkFilterMenuItems,
    itemComponentElement: FilterMenuItem,
    itemComponentWrapperElement: document.querySelector('.soft-drink-filter-menu')
});

dataService.fetchData('../assets/json/burgers.json')
    .then(({ burgers }) => {

        bitez.renderProductsToUI({
            products: burgers,
            productType: 'burgers',
            productOptionType: 'patty',
            productImageExtension: 'png',
            productCardElement: burgerCardElement
        });

        filterManager.filterMenu({
            menuActiveClassName: 'filter-menu__item--active',
            itemActiveClassName: 'product-card__item--active',
            filteredItems: document.querySelectorAll('.burger-card .product-card__item'),
            filterMenuItems: document.querySelectorAll('.burger-filter-menu .filter-menu__item')
        });
    })

dataService.fetchData('../assets/json/drinks.json')
    .then(({ drinks }) => {
        bitez.renderProductsToUI({
            products: drinks,
            productType: 'drinks',
            productOptionType: 'shot',
            productImageExtension: 'png',
            productCardElement: softDrinkCardElement
        });

        filterManager.filterMenu({
            menuActiveClassName: 'filter-menu__item--active',
            itemActiveClassName: 'product-card__item--active',
            filteredItems: document.querySelectorAll('.soft-drink-card .product-card__item'),
            filterMenuItems: document.querySelectorAll('.soft-drink-filter-menu .filter-menu__item')
        });
    })

// get faq section content
// dataService.fetchData('../assets/json/faqs.json')
//     .then(({ faqs }) => {
//         bitez.renderToUI({
//             items: faqs,
//             itemComponentElement: FaqItem,
//             itemComponentWrapperElement: document.querySelector('.faq-accordion')
//         });


//         let items = document.querySelectorAll('.faq-accordion__item');

//         let accordion = new Accordion({
//             element: document.querySelector('.faq-accordion'),
//             elementItems: items,
//             headElements: document.querySelectorAll('.faq-accordion__head'),
//             bodyElements: document.querySelectorAll('.faq-accordion__body'),
//             titleElements: document.querySelectorAll('.faq-accordion__title'),
//             iconElements: document.querySelectorAll('.faq-accordion__icon'),
//             classNames: {
//                 headClassName: 'faq-accordion__head--active',
//                 titleClassName: 'faq-accordion__title--active',
//                 iconClassName: 'faq-accordion__icon--active'
//             }
//         });
//         accordion.switch();
//     })

// get career section content
dataService.fetchData('../assets/json/careers.json')
    .then(({ careers }) => {
        bitez.renderToUI({
            items: careers,
            itemComponentElement: CareerItem,
            itemComponentWrapperElement: document.querySelector('.career-card')
        });
    })

syncActiveClasses([
    {
        elements: document.querySelectorAll('.navigation__link'),
        activeClass: 'navigation__link--active'
    },
    {
        elements: document.querySelectorAll('.footer-navigation__link'),
        activeClass: 'navigation__link--active'
    }
]);