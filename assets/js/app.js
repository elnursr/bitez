// import default configs
import burgerFilterTabItems from './config/burgerFilterTabItems.js';
import softDrinkFilterTabItems from './config/softDrinkFilterTabItems.js';
import navigationItems from './config/navigationItems.js';
import footerContactItems from './config/footerContactItems.js';
import footerFollowUsItems from './config/footerFollowUsItems.js';
import footerNavigationItems from './config/footerNavigationItems.js';

import { FilterTabItem } from './components/FilterTabItem.js';
import { FaqItem } from './components/FaqItem.js';
import { CareerItem } from './components/CareerItem.js';
import { FollowUsItem } from './components/FollowUsItem.js';
import { FooterContactItem } from './components/FooterContactItem.js'
import { FooterNavigationItem } from './components/FooterNavigationItem.js';
import { NavigationItem } from './components/NavigationItem.js';

import Bitez from './bitez/index.js';

import Accordion from './accordion/index.js'

import { DataService } from './services/DataService.js';

import {
    burgerCardElement, softDrinkCardElement,
    navigationListElement,
    footerNavigationListElement,
    footerContactListElement, footerFollowUsListElement
} from './dom/dom-selectors.js';

const bitez = new Bitez();

const dataService = new DataService();

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

        let burgerCardItemElement = document.querySelectorAll('.burger-card .product-card__item'),
            burgerFilterTabItemElement = document.querySelectorAll('.burger-filter-tab .filter-tab__item');
        for (let i = 0; i < burgerFilterTabItemElement.length; i++) {
            burgerFilterTabItemElement[i].addEventListener('click', function (e) {
                e.preventDefault();

                let index = 0;

                for (let i = 0; i < burgerFilterTabItemElement.length; i++) {
                    burgerFilterTabItemElement[i].classList.remove('filter-tab__item--active');
                }

                burgerFilterTabItemElement[i].classList.add('filter-tab__item--active');

                let filterTab = burgerFilterTabItemElement[i].dataset.filterTab;

                for (let i = 0; i < burgerCardItemElement.length; i++) {

                    burgerCardItemElement[i].classList.remove('product-card__item--active');

                    let filterCategory = burgerCardItemElement[i].dataset.filterCategory;

                    if (filterTab === filterCategory || filterTab === 'all') {
                        setTimeout(function () {
                            burgerCardItemElement[i].classList.add('product-card__item--active');
                        }, 111);
                        burgerCardItemElement[i].style.setProperty('--index', index);
                        index++;
                    }
                }
            });
        }
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

        let softDrinkCardItemElement = document.querySelectorAll('.soft-drink-card .product-card__item'),
            softDrinkFilterTabItemElement = document.querySelectorAll('.soft-drink-filter-tab .filter-tab__item');

        for (let i = 0; i < softDrinkFilterTabItemElement.length; i++) {


            softDrinkFilterTabItemElement[i].addEventListener('click', function (e) {
                e.preventDefault();

                let index = 0;

                for (let i = 0; i < softDrinkFilterTabItemElement.length; i++) {
                    softDrinkFilterTabItemElement[i].classList.remove('filter-tab__item--active');
                }

                softDrinkFilterTabItemElement[i].classList.add('filter-tab__item--active');

                let filterTab = softDrinkFilterTabItemElement[i].dataset.filterTab;

                for (let i = 0; i < softDrinkCardItemElement.length; i++) {
                    softDrinkCardItemElement[i].classList.remove('product-card__item--active');

                    let filterCategory = softDrinkCardItemElement[i].dataset.filterCategory;

                    if (filterTab === filterCategory || filterTab === 'all') {
                        softDrinkCardItemElement[i].style.setProperty('--index', index);
                        softDrinkCardItemElement[i].classList.remove('product-card__item--active');
                        // softDrinkCardItemElement[i].classList.add('product-card__item--active');
                        setTimeout(function () {
                            softDrinkCardItemElement[i].classList.add('product-card__item--active');
                        }, 111)
                        index++;
                    }
                }
            });
        }
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
                headClassName: 'faq-accordion__head--active',
                iconClassName: 'faq-accordion__icon--active',
                titleClassName: 'faq-accordion__title--active'
            },
            widthItems: '85%'
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