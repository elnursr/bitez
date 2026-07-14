import { removeActiveClasses } from '../dom/index.js';


export default function Accordion({
    element = '' | undefined,
    elementItems = [] | undefined,
    headElements = [] | undefined,
    bodyElements = [] | undefined,
    iconElements = [] | undefined,
    titleElements = [] | undefined,
    icons = [] | undefined,
    titles = [] | undefined,
    descriptions = [] | undefined,
    classNames = { iconClassName: '', titleClassName: '', headClassName: '' } | undefined,
    widthItems = '' | undefined
}) {
    this.element = element;
    this.elementItems = elementItems;
    this.headElements = headElements;
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
    for (let i = 0; i < this.headElements.length; i++) {
        let defaultItemHeight = this.elementItems[i].scrollHeight;
        this.headElements[i].addEventListener('click', function (e) {
            e.preventDefault();
            this.iconElements[i].classList.add(this.classNames.iconClassName);
            this.titleElements[i].classList.add(this.classNames.titleClassName);
            this.headElements[i].classList.add(this.classNames.headClassName);
            this.bodyElements[i].style.height = this.bodyElements[i].scrollHeight + 'px';
            let expandedItemHeight = this.elementItems[i].scrollHeight;
            if (defaultItemHeight < expandedItemHeight) {
                this.bodyElements[i].style.height = '0px';
                this.iconElements[i].classList.remove(this.classNames.iconClassName);
                this.titleElements[i].classList.remove(this.classNames.titleClassName);
                this.headElements[i].classList.remove(this.classNames.headClassName);
            }
        }.bind(this));
    }
}

Accordion.prototype.switch = function () {
    for (let i = 0; i < this.headElements.length; i++) {
        this.headElements[i].addEventListener('click', function (e) {
            e.preventDefault();
            this.resetHeight();

            removeActiveClasses({
                elements: this.iconElements,
                activeClass: this.classNames.iconClassName
            });

            removeActiveClasses({
                elements: this.titleElements,
                activeClass: this.classNames.titleClassName
            });

            removeActiveClasses({
                elements: this.headElements,
                activeClass: this.classNames.headClassName
            });

            this.headElements[i].classList.add(this.classNames.headClassName);
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