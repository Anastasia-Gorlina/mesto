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
        if (method === "prepend") {
            this._container.prepend(element)
        } else {
            this._container.append(element) 
        }
    }
}