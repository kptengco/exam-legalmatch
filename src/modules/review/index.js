class ClientReviewItemComponent extends Component {

    constructor(model) {
        super();

        this.model = model || {
            image: null,
            name: null,
            location: null,
            review: null,
            category: null,
            rating: 0
        };
    }

    get translate() {
        return TRANSLATIONS;
    }

    get componentSelector() {
        return 'review-item-component';
    }

    get template() {
        return `
        <div class="review-item">
            <div class="lawyer-info">
                <img class="lawyer-pic"
                    src="${this.model.image}"
                    alt="" />
                <span class="lawyer-name">${this.model.name}</span>
                <span class="lawyer-location">${this.model.location}</span>
            </div>

            <div class="client-review-description">
                <div class="client-rating">
                    <div class="category">${this.model.category}</div>
                    <div rating=""></div>
                </div>

                <div class="review-description">
                    <p class="description">${this.model.review}</p>
                </div>

                <div class="view-more">
                    <span>Read Review</span>
                    <span class="icon-book"></span>
                </div>
            </div>
        </div>
        `;
    }

    render() {
        const ratingComponent = new RatingComponent(this.model.rating);
        ratingComponent.compile();

        super.render();

        this.findElement('[rating]').appendChild(ratingComponent.domNode);

        this.findElement('.view-more').addEventListener('click', () => {
            const t = document.createElement('div');
            t.innerHTML = 'hello world';

            modalComponent.open({
                heading: this.translate['review.modal.clientReviews'],
                componentNode: t
            });
        });
    }
}

class ClientReviewComponent extends Component {

    get componentSelector() {
        return 'client-review-component';
    }

    get translate() {
        return TRANSLATIONS;
    }

    get template() {
        return `
            <div class="heading">
                <div class="sub-label">${this.translate['review.clientReviews']}</div>
            </div>

            <div class="reviews"></div>
        `;
    }

    get reviewItemNode() {
        return this.findElement('.reviews');
    }

    render() {
        super.render();

        for (const item of REVIEW.HIGHLIGHTS) {
            const clientReviewItemComponent = new ClientReviewItemComponent(item);
            clientReviewItemComponent.compile();
            this.reviewItemNode.appendChild(clientReviewItemComponent.domNode);
        }
    }
}

const clientReviewComponent = new ClientReviewComponent();