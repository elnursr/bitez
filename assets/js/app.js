// import default configs
import navigationItems from './config/navigationItems.js';
import footerContactItems from './config/footerContactItems.js';
import footerFollowUsItems from './config/footerFollowUsItems.js';
import burgerFilterTabItems from './config/burgerFilterTabItems.js';
import footerNavigationItems from './config/footerNavigationItems.js';
import softDrinkFilterTabItems from './config/softDrinkFilterTabItems.js';

import { FaqItem } from './components/FaqItem.js';
import { CareerItem } from './components/CareerItem.js';
import { FollowUsItem } from './components/FollowUsItem.js';
import { FilterTabItem } from './components/FilterTabItem.js';
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
    footerContactListElement, footerFollowUsListElement
} from './dom/dom-selectors.js';

const bitez = new Bitez();

const dataService = new DataService();

const filterManager = new FilterManager();

bitez.renderToUI({
    items: burgerFilterTabItems,
    itemComponentElement: FilterTabItem,
    itemComponentWrapperElement: document.querySelector('.burger-filter-tab')
});

bitez.renderToUI({
    items: softDrinkFilterTabItems,
    itemComponentElement: FilterTabItem,
    itemComponentWrapperElement: document.querySelector('.soft-drink-filter-tab')
});

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
            filteredItems: document.querySelectorAll('.burger-card .product-card__item'),
            filterMenuItems: document.querySelectorAll('.burger-filter-tab .filter-tab__item')
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
            filteredItems: document.querySelectorAll('.soft-drink-card .product-card__item'),
            filterMenuItems: document.querySelectorAll('.soft-drink-filter-tab .filter-tab__item')
        });
    })

// get faq section content
dataService.fetchData('../assets/json/faqs.json')
    .then(({ faqs }) => {
        bitez.renderToUI({
            items: faqs,
            itemComponentElement: FaqItem,
            itemComponentWrapperElement: document.querySelector('.faq-accordion')
        });

        let accordion = new Accordion({
            element: document.querySelector('.faq-accordion'),
            elementItems: document.querySelectorAll('.faq-accordion__item'),
            headerElements: document.querySelectorAll('.faq-accordion__head'),
            bodyElements: document.querySelectorAll('.faq-accordion__body'),
            iconElements: document.querySelectorAll('.faq-accordion__icon'),
            titleElements: document.querySelectorAll('.faq-accordion__title'),
            classNames: {
                iconClassName: 'faq-accordion__icon--active',
                headClassName: 'faq-accordion__head--active',
                titleClassName: 'faq-accordion__title--active'
            },
            widthItems: '100%'
        });
        accordion.toggle();
    })

// get career section content
dataService.fetchData('../assets/json/careers.json')
    .then(({ careers }) => {
        bitez.renderToUI({
            items: careers,
            itemComponentElement: CareerItem,
            itemComponentWrapperElement: document.querySelector('.career-card')
        });
    })