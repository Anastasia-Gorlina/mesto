export default class Section {
    constructor({items, renderer}, selectorContainer) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(selectorContainer)
    }

    renderItems = (callback) => {
        this._renderedItems.forEach((item) => { 
            const newElement = this._renderer(item, callback)
            this.addItem(newElement, "append");
        })
    }

    addItem = (element, method = "prepend") => {
        this._container[method](element)
        
    }
}