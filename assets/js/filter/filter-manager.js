import { removeActiveClasses } from '../dom/index.js';

export default function FilterManager() { }

FilterManager.prototype.filterMenu = function ({ filterMenuItems, filteredItems, menuActiveClassName, itemActiveClassName }) {

    for (let i = 0; i < filterMenuItems.length; i++) {
        filterMenuItems[i].addEventListener('click', function (e) {

            e.preventDefault();

            removeActiveClasses({
                elements: filterMenuItems,
                activeClass: menuActiveClassName
            });

            filterMenuItems[i].classList.add(menuActiveClassName);

            this.filterItems({
                filteredItems: filteredItems,
                activeClass: itemActiveClassName,
                transitionCount: 0,
                menuCategory: filterMenuItems[i].dataset.filterCategory
            })

        }.bind(this));
    }
}

FilterManager.prototype.filterItems = function ({ filteredItems, menuCategory, activeClass, transitionCount }) {
    for (let i = 0; i < filteredItems.length; i++) {

        filteredItems[i].classList.remove(activeClass);

        let itemCategory = filteredItems[i].dataset.filterCategory;

        if (menuCategory === 'all' || menuCategory === itemCategory) {
            setTimeout(function () {
                filteredItems[i].classList.add(activeClass);
            }, 111);
            filteredItems[i].style.setProperty('--index', transitionCount);
            transitionCount++;
        }
    }
}