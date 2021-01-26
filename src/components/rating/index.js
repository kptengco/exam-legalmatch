class RatingComponent extends Component {

    constructor(value) {
        super();

        if (!value) {
            throw new Error('value is required.');
        }

        if (+value > 5) {
            throw new Error('exceeded max value.');
        }

        this.value = value;
    }

    get componentSelector() {
        return 'rating-component';
    }

    get template() {
        return `
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
            <span class="icon-star"></span>
        `;
    }

    render() {
        super.render();

        for (let counter = 0; counter < this.value; counter++) {
            this.domNode.children[counter].classList.add('starred');
        }
    }
}
