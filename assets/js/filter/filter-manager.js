export default function FilterManager() { }

FilterManager.prototype.filterMenu = function ({ filterMenuItems, filteredItems }) {

    for (let i = 0; i < filterMenuItems.length; i++) {
        filterMenuItems[i].addEventListener('click', function (e) {

            e.preventDefault();

            let transitionCount = 0;

            for (let i = 0; i < filterMenuItems.length; i++) {
                filterMenuItems[i].classList.remove('filter-tab__item--active');
            }

            filterMenuItems[i].classList.add('filter-tab__item--active');

            let menuCategory = filterMenuItems[i].dataset.filterTab;

            this.filterItems({
                filteredItems: filteredItems,
                menuCategory: menuCategory,
                transitionCount: transitionCount,
                activeClass: 'product-card__item--active'
            })

        }.bind(this));
    }
}

FilterManager.prototype.filterItems = function ({ filteredItems, activeClass, menuCategory, transitionCount }) {
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