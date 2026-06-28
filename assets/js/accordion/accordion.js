export default function Accordion({
    element = '' | undefined,
    elementItems = [] | undefined,
    headerElements = [] | undefined,
    bodyElements = [] | undefined,
    iconElements = [] | undefined,
    icons = [] | undefined,
    titles = [] | undefined,
    descriptions = [] | undefined,
    classNames = { iconClassNames: [] } | undefined,
    widthItems = '' | undefined
}) {
    this.element = element;
    this.elementItems = elementItems;
    this.headerElements = headerElements;
    this.bodyElements = bodyElements;
    this.iconElements = iconElements;
    this.icons = icons;
    this.title = titles;
    this.description = descriptions;
    this.classNames = classNames;
    this.widthItems = widthItems;
    if (this.elementItems.length > 0 && this.widthItems) {
        for (let i = 0; i < this.elementItems.length; i++) {
            this.elementItems[i].style.width = this.widthItems;
        }
    }
}

Accordion.prototype.switch = function () {
    for (let i = 0; i < this.headerElements.length; i++) {
        this.headerElements[i].addEventListener('click', function (e) {
            e.preventDefault();
            this.resetHeight();
            this.resetClass(this.iconElements);
            this.iconElements[i].classList.toggle(this.classNames.iconClassNames);
            this.bodyElements[i].style.height = this.bodyElements[i].scrollHeight + 'px';
        }.bind(this))
    }
}

Accordion.prototype.resetHeight = function () {
    for (let i = 0; i < this.bodyElements.length; i++) {
        this.bodyElements[i].style.height = '0px';
    }
}

Accordion.prototype.resetClass = function (elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(this.classNames.iconClassNames);
    }
}