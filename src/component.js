class Component {
    
    constructor() {
        this.domNode = document.createElement('div');
        this.domNode.classList.add(this.componentSelector);
    }
    
    get componentSelector() {
        throw new Error('implement this');
    }

    get template() {
        throw new Error('implement this');
    }

    findElement(selector) {
        return this.domNode.querySelector(selector);
    }

    render() {
        this.domNode.innerHTML = this.template;
    }

    compile() {
        this.render();
    }

    detach() {
        this.domNode.remove();
    }

    destroy() {
        this.detach();
        this.domNode.innerHTML = '';
    }
}