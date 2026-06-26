import Bitez from './bitez/index.js';

import { DataService } from './services/DataService.js';

import { burgerCardElement, coffeeCardElement, burgerFilterTabItemElement, coffeeFilterTabItemElement } from './dom/dom-selectors.js';

const bitez = new Bitez();

const dataService = new DataService();

dataService.fetchData('../assets/json/burgers.json')
    .then(({ burgers }) => {

        bitez.renderProductsToUI({
            products: burgers,
            productType: 'burgers',
            productOptionType:'patty',
            productImageExtension: 'png',
            productCardElement: burgerCardElement
        });

        let burgerCardItemElement = document.querySelectorAll('.burger-card .product-card__item');
        for (let i = 0; i < burgerFilterTabItemElement.length; i++) {
            burgerFilterTabItemElement[i].addEventListener('click', function (e) {
                e.preventDefault();
                for (let i = 0; i < burgerFilterTabItemElement.length; i++) {
                    burgerFilterTabItemElement[i].classList.remove('filter-tab__item--active');
                }
                burgerFilterTabItemElement[i].classList.add('filter-tab__item--active');
                let filterTab = burgerFilterTabItemElement[i].dataset.filterTab;
                for (let i = 0; i < burgerCardItemElement.length; i++) {
                    burgerCardItemElement[i].classList.remove('product-card__item--active');
                    let filterCategory = burgerCardItemElement[i].dataset.filterCategory;
                    if (filterTab === filterCategory || filterTab === 'all') {
                        burgerCardItemElement[i].classList.add('product-card__item--active');
                    }
                }
            });
        }
    })

// dataService.fetchData('../assets/json/coffees.json')
//     .then(({ coffees }) => {
//         bitez.renderProductsToUI({
//             products: coffees,
//             productType: 'coffees',
//             productOptionType:'shot',
//             productImageExtension: 'png',
//             productCardElement: coffeeCardElement
//         });

//         let coffeeCardItemElement = document.querySelectorAll('.coffee-card .product-card__item');
//         for (let i = 0; i < coffeeFilterTabItemElement.length; i++) {
//             coffeeFilterTabItemElement[i].addEventListener('click', function (e) {
//                 e.preventDefault();
//                 for (let i = 0; i < coffeeFilterTabItemElement.length; i++) {
//                     coffeeFilterTabItemElement[i].classList.remove('filter-tab__item--active');
//                 }
//                 coffeeFilterTabItemElement[i].classList.add('filter-tab__item--active');
//                 let filterTab = coffeeFilterTabItemElement[i].dataset.filterTab;
//                 for (let i = 0; i < coffeeCardItemElement.length; i++) {
//                     coffeeCardItemElement[i].classList.remove('product-card__item--active');
//                     let filterCategory = coffeeCardItemElement[i].dataset.filterCategory;
//                     if (filterTab === filterCategory || filterTab === 'all') {
//                         coffeeCardItemElement[i].classList.add('product-card__item--active');
//                     }
//                 }
//             });
//         }
//     })

dataService.fetchData('../assets/json/drinks.json')
    .then(({ drinks }) => {
        bitez.renderProductsToUI({
            products: drinks,
            productType: 'coffees',
            productOptionType:'shot',
            productImageExtension: 'png',
            productCardElement: coffeeCardElement
        });

        let coffeeCardItemElement = document.querySelectorAll('.coffee-card .product-card__item');
        for (let i = 0; i < coffeeFilterTabItemElement.length; i++) {
            coffeeFilterTabItemElement[i].addEventListener('click', function (e) {
                e.preventDefault();
                for (let i = 0; i < coffeeFilterTabItemElement.length; i++) {
                    coffeeFilterTabItemElement[i].classList.remove('filter-tab__item--active');
                }
                coffeeFilterTabItemElement[i].classList.add('filter-tab__item--active');
                let filterTab = coffeeFilterTabItemElement[i].dataset.filterTab;
                for (let i = 0; i < coffeeCardItemElement.length; i++) {
                    coffeeCardItemElement[i].classList.remove('product-card__item--active');
                    let filterCategory = coffeeCardItemElement[i].dataset.filterCategory;
                    if (filterTab === filterCategory || filterTab === 'all') {
                        coffeeCardItemElement[i].classList.add('product-card__item--active');
                    }
                }
            });
        }
    })