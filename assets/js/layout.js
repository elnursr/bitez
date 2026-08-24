// components
import {
    FollowUsItem,
    NavigationItem,
    FooterLegalItem,
    FooterContactItem,
    FooterNavigationItem
} from './components/index.js';

// configs
import {
    navigationItems,
    footerLegalItem,
    footerContactItems,
    footerFollowUsItems,
    footerNavigationItems
} from './config/index.js';

// dom
import {
    loadScreenElement,
    navigationMenuElement,
    navigationListElement,
    footerLegalYearElement,
    footerNavigationListElement, footerLegalListElement,
    footerContactListElement, footerFollowUsListElement,
} from './dom/index.js';

import Bitez from './bitez/index.js';

const bitez = new Bitez();

// load screen
bitez.disableLoadScreen({
    loadTime: 1993,
    element: loadScreenElement,
    className: 'load-screen--deactive',
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

// footer legal
bitez.renderToUI({
    items: footerLegalItem,
    itemComponentElement: FooterLegalItem,
    itemComponentWrapperElement: footerLegalListElement
});

navigationMenuElement.addEventListener('click', function (e) {
    e.preventDefault();
    navigationMenuElement.classList.toggle('navigation-menu--active');
    navigationListElement.classList.toggle('navigation__list--active');
});

footerLegalYearElement.innerHTML = `${new Date().getFullYear()}`;