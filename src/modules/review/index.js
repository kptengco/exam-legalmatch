class ClientAllReviewComponent extends Component {

    constructor(model) {
        super();

        if (!model) {
            throw new Error('model is required.');
        }

        this.model = model;
    }

    get componentSelector() {
        return 'client-all-review-component';
    }

    get translate() {
        return TRANSLATIONS;
    }

    get clientRatingsNode() {
        return this.findElement('[client-ratings]');
    }

    get clientReviewsNode() {
        return this.findElement('[client-reviews]');
    }

    get template() {
        return `
            <div class="lawyer-info">
                <div class="lawyer-pic">
                    <img class="lawyer-pic"
                        src="${this.model.image}"
                        alt="" />
                </div>
                <div class="lawyer-details">
                    <span class="lawyer-name">${this.model.name}</span>
                    <span class="lawyer-location">${this.model.location}</span>
                    <span class="category">${this.model.category}</span>
                </div>
            </div>

            <div class="client-overall-rating">
                <span class="rating-label">${this.translate['common.rating']}</span>
                <span class="users-count">(${this.model.numberOfUsersRated} ${this.translate['common.users']})</span>
                <div overall-rating-overview="" class="overall-rating-overview"></div>
            </div>

            <div class="client-ratings-container" client-ratings="">
                <div class="client-rating">
                    <div class="rating-description">${this.translate['common.overAll']}</div>
                    <div overall-rating="" class="rating"></div>
                </div>
            </div>

            <div class="client-reviews" client-reviews=""></div>
        `;
    }

    generateRatingNode(item) {
        const rating = new RatingComponent(item.rating);
        rating.compile();

        const div = document.createElement('div');
        div.classList.add('client-rating');
        div.innerHTML = `
            <div class="rating-description">${item.description}</div>
            <div overall-rating="" class="rating"></div>
        `;

        div.querySelector('[overall-rating]').appendChild(rating.domNode);

        return div;
    }

    generateReviewNode(item) {
        const rating = new RatingComponent(item.rating);
        rating.compile();

        const dateRated = new Date(item.date);
        const displayDate = dateRated.toLocaleString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        const div = document.createElement('div');
        div.classList.add('client-review');
        div.innerHTML = `
            <div class="review-overview">
                <div overall-rating="" class="rating"></div>
                <div class="review-by">${this.translate['common.by']} ${item.name}, ${displayDate}</div>
            </div>

            <div class="review-detail">
                <p>${item.description}</p>
            </div>
        `;

        div.querySelector('[overall-rating]').appendChild(rating.domNode);

        return div;
    }

    render() {
        super.render();

        let overAllRating = new RatingComponent(this.model.overallRating);
        overAllRating.compile();
        this.findElement('[overall-rating-overview]').appendChild(overAllRating.domNode);

        overAllRating = new RatingComponent(this.model.overallRating);
        overAllRating.compile();
        this.findElement('[overall-rating]').appendChild(overAllRating.domNode);

        for (const item of this.model.rating) {
            this.clientRatingsNode.appendChild(this.generateRatingNode(item));
        }

        for (const item of this.model.review) {
            this.clientReviewsNode.appendChild(this.generateReviewNode(item));
        }
    }
}

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
            const review = REVIEW.MODAL.filter(data => data.id === this.model.id);

            const clientAllReviewComponent = new ClientAllReviewComponent({
                image: this.model.image,
                name: this.model.name,
                location: this.model.location,
                category: this.model.category,
                ...review.pop()
            });
            clientAllReviewComponent.compile();

            modalComponent.open({
                heading: this.translate['review.modal.clientReviews'],
                componentNode: clientAllReviewComponent.domNode
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