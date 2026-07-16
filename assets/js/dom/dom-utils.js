export function addActiveClass({ element, activeClass }) {
    element.classList.add(activeClass);
}

export function removeActiveClasses({ elements, activeClass }) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains(activeClass)) {
            elements[i].classList.remove(activeClass);
        }
    }
}

export function syncActiveClasses(configs) {
    for (let i = 0; i < configs.length; i++) {
        let { elements, activeClass } = configs[i];
        setupActiveClassToggle({
            elements,
            activeClass
        });
    }
}

export function setupActiveClassToggle({ elements, activeClass }) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function (e) {
            removeActiveClasses({
                elements,
                activeClass
            });
            addActiveClass({
                element: elements[i],
                activeClass
            });
        });
    }
}