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
                    <div class="rating">
                        <span class="icon-star"></span>
                        <span class="icon-star"></span>
                        <span class="icon-star"></span>
                        <span class="icon-star"></span>
                        <span class="icon-star"></span>
                    </div>
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

        const mockClientReviewData = [
            {
                image: 'assets/images/lawyers/f5e75165-704b-4864-a98c-bdb0c856ae0f.png',
                name: 'Mitchell M.',
                location: 'Cherry Hill, NJ',
                rating: 5,
                category: 'Family Law',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ligula sed turpis sollicitudin fringilla. Vestibulum fermentum justo dui. Donec id ullamcorper lacus, ut accumsan orci.'
            },
            {
                image: 'assets/images/lawyers/ac9af587-5b36-4de7-992d-020f9c8badec .png',
                name: 'Joel C.',
                location: 'Little Rock, AK',
                rating: 5,
                category: 'Job & Employment Law',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ligula sed turpis sollicitudin fringilla. Vestibulum fermentum justo dui. Donec id ullamcorper lacus, ut accumsan orci.'
            },
            {
                image: 'assets/images/lawyers/91442921-e7ec-4748-a04b-e3dc8678c54a.png',
                name: 'Brigida R.',
                location: 'Dallas, TX',
                rating: 5,
                category: 'Family Law',
                review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ligula sed turpis sollicitudin fringilla. Vestibulum fermentum justo dui. Donec id ullamcorper lacus, ut accumsan orci.'
            }
        ];

        for (const item of mockClientReviewData) {
            const clientReviewItemComponent = new ClientReviewItemComponent(item);
            clientReviewItemComponent.compile();
            this.reviewItemNode.appendChild(clientReviewItemComponent.domNode);
        }
    }
}

const clientReviewComponent = new ClientReviewComponent();