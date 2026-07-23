// import default configs
import navigationItems from './config/navigationItems.js';
import footerContactItems from './config/footerContactItems.js';
import footerFollowUsItems from './config/footerFollowUsItems.js';
import burgerFilterMenuItems from './config/burgerFilterMenuItems.js';
import sidesFilterMenuItems from './config/sidesFilterMenuItems.js';
import wrapsFilterMenuItems from './config/wrapsFilterMenuItems.js';
import footerNavigationItems from './config/footerNavigationItems.js';
import hotDrinkFilterMenuItems from './config/hotDrinkFilterMenuItems.js';
import coolDrinkFilterMenuItems from './config/coolDrinkFilterMenuItems.js';

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
    burgerCardElement, sideCardElement, wrapCardElement,
    coolDrinkCardElement, hotDrinkCardElement,
    navigationListElement,
    footerNavigationListElement,
    footerContactListElement, footerFollowUsListElement,
    syncActiveClasses
} from './dom/index.js';

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

let swiper = new Swiper('.hero-slider', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 3555,
        disableOnInteraction: false,
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
    items: sidesFilterMenuItems,
    itemComponentElement: FilterMenuItem,
    itemComponentWrapperElement: document.querySelector('.side-filter-menu')
});

bitez.renderToUI({
    items: wrapsFilterMenuItems,
    itemComponentElement: FilterMenuItem,
    itemComponentWrapperElement: document.querySelector('.wrap-filter-menu')
});

bitez.renderToUI({
    items: coolDrinkFilterMenuItems,
    itemComponentElement: FilterMenuItem,
    itemComponentWrapperElement: document.querySelector('.cool-drink-filter-menu')
});

bitez.renderToUI({
    items: hotDrinkFilterMenuItems,
    itemComponentElement: FilterMenuItem,
    itemComponentWrapperElement: document.querySelector('.hot-drink-filter-menu')
});

// burgers
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

// sides
dataService.fetchData('../assets/json/sides.json')
    .then(({ sides }) => {

        bitez.renderProductsToUI({
            products: sides,
            productType: 'sides',
            productOptionType: 'patty',
            productImageExtension: 'png',
            productCardElement: sideCardElement
        });

        filterManager.filterMenu({
            menuActiveClassName: 'filter-menu__item--active',
            itemActiveClassName: 'product-card__item--active',
            filteredItems: document.querySelectorAll('.side-card .product-card__item'),
            filterMenuItems: document.querySelectorAll('.side-filter-menu .filter-menu__item')
        });
    })

// wraps
dataService.fetchData('../assets/json/wraps.json')
    .then(({ wraps }) => {

        bitez.renderProductsToUI({
            products: wraps,
            productType: 'wraps',
            productOptionType: 'patty',
            productImageExtension: 'png',
            productCardElement: wrapCardElement
        });

        filterManager.filterMenu({
            menuActiveClassName: 'filter-menu__item--active',
            itemActiveClassName: 'product-card__item--active',
            filteredItems: document.querySelectorAll('.wrap-card .product-card__item'),
            filterMenuItems: document.querySelectorAll('.wrap-filter-menu .filter-menu__item')
        });
    })

// cool-drinks
dataService.fetchData('../assets/json/cool-drinks.json')
    .then(({ cool_drinks }) => {
        bitez.renderProductsToUI({
            products: cool_drinks,
            productType: 'cool-drinks',
            productOptionType: 'shot',
            productImageExtension: 'png',
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
dataService.fetchData('../assets/json/hot-drinks.json')
    .then(({ hot_drinks }) => {
        bitez.renderProductsToUI({
            products: hot_drinks,
            productType: 'hot-drinks',
            productOptionType: 'shot',
            productImageExtension: 'png',
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
        activeClass: 'footer__link--active'
    }
]);