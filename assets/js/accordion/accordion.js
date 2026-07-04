export default function Accordion({
    element = '' | undefined,
    elementItems = [] | undefined,
    headerElements = [] | undefined,
    bodyElements = [] | undefined,
    iconElements = [] | undefined,
    titleElements = [] | undefined,
    icons = [] | undefined,
    titles = [] | undefined,
    descriptions = [] | undefined,
    classNames = { iconClassName: '', titleClassName: '' ,headClassName:''} | undefined,
    widthItems = '' | undefined
}) {
    this.element = element;
    this.elementItems = elementItems;
    this.headerElements = headerElements;
    this.bodyElements = bodyElements;
    this.iconElements = iconElements;
    this.titleElements = titleElements;
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

Accordion.prototype.toggle = function () {
    for (let i = 0; i < this.headerElements.length; i++) {
        let defaultItemHeight = this.elementItems[i].scrollHeight;
        this.headerElements[i].addEventListener('click', function (e) {
            e.preventDefault();
            this.resetClass({
                elements: this.titleElements,
                className: this.classNames.titleClassName
            });
            this.iconElements[i].classList.add(this.classNames.iconClassName);
            this.titleElements[i].classList.add(this.classNames.titleClassName);
            this.bodyElements[i].style.height = this.bodyElements[i].scrollHeight + 'px';
            let expandedItemHeight = this.elementItems[i].scrollHeight;
            if (defaultItemHeight < expandedItemHeight) {
                this.bodyElements[i].style.height = '0px';
                this.iconElements[i].classList.remove(this.classNames.iconClassName);
                this.titleElements[i].classList.remove(this.classNames.titleClassName);
            }
        }.bind(this));
    }
}

Accordion.prototype.switch = function () {
    for (let i = 0; i < this.headerElements.length; i++) {
        this.headerElements[i].addEventListener('click', function (e) {
            e.preventDefault();
            this.resetHeight();
            this.resetClass({
                elements: this.iconElements,
                className: this.classNames.iconClassName
            });
            this.resetClass({
                elements: this.titleElements,
                className: this.classNames.titleClassName
            });
             this.resetClass({
                elements: this.headerElements,
                className: this.classNames.headClassName
            });
            this.headerElements[i].classList.add(this.classNames.headClassName);
            this.iconElements[i].classList.add(this.classNames.iconClassName);
            this.titleElements[i].classList.add(this.classNames.titleClassName);
            this.bodyElements[i].style.height = this.bodyElements[i].scrollHeight + 'px';
        }.bind(this))
    }
}

Accordion.prototype.resetHeight = function () {
    for (let i = 0; i < this.bodyElements.length; i++) {
        this.bodyElements[i].style.height = '0px';
    }
}

Accordion.prototype.resetClass = function ({ elements, className }) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(className);
    }
}