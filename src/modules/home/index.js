class HomeComponent extends Component {

    get componentSelector() {
        return 'home-component';
    }

    get translate() {
        return TRANSLATIONS;
    }

    get template() {
        return `
        <div class="bg"></div>

        <div class="home-section">
            <div class="heading">
                <div class="label">${this.translate['home.findALawyer']}</div>
                <div class="sub-label">${this.translate['home.keyFactors']}</div>
            </div>

            <div class="home-container">
                <div class="quick-find">
                    <div class="find-location">
                        <p class="quick-input-helper">
                            <label>${this.translate['home.findLocation']}</label>
                        </p>
                        <div class="quick-input-container">
                            <div class="quick-input-label">1</div>
                            <div class="quick-input">
                                <input type="text"
                                    class="input"
                                    placeholder="${this.translate['home.findLocationLabel']}"
                                    maxlength="50" />
                            </div>
                        </div>
                    </div>

                    <div class="find-category">
                        <p class="quick-input-helper">
                            <label>${this.translate['home.chooseCategory']}</label>
                        </p>
                        <div class="quick-input-container">
                            <div class="quick-input-label">2</div>
                            <div class="quick-input">
                                <input type="text"
                                    class="input"
                                    placeholder="${this.translate['home.chooseCategoryLabel']}"
                                    maxlength="50" />
                            </div>
                        </div>
                    </div>

                    <div class="find-category-helper">
                        <p class="quick-input-helper">
                            <label>
                                ${this.translate['home.categoryHelper']}
                                <a href="#"
                                    class="all-category">${this.translate['common.clickHere']}</a>
                            </label>
                        </p>
                    </div>
                </div>

                <div class="client-reviews" client-reviews="">
                    <div class="client-review-component">
                        <div class="heading">
                            <div class="sub-label">${this.translate['review.clientReviews']}</div>
                        </div>

                        <div class="reviews">
                            <div class="review-item">
                                <div class="lawyer-info">
                                    <img class="lawyer-pic"
                                        src="assets/images/lawyers/f5e75165-704b-4864-a98c-bdb0c856ae0f.png"
                                        alt="" />
                                    <span class="lawyer-name">Mitchell M.</span>
                                    <span class="lawyer-location">Cherry Hill, NJ</span>
                                </div>

                                <div class="client-review-description">
                                    <div class="client-rating">
                                        <div class="category">Family Law</div>
                                        <div class="rating">
                                            <span class="icon-star"></span>
                                            <span class="icon-star"></span>
                                            <span class="icon-star"></span>
                                            <span class="icon-star"></span>
                                            <span class="icon-star"></span>
                                        </div>
                                    </div>

                                    <div class="review-description">
                                        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ligula sed turpis sollicitudin fringilla. Vestibulum fermentum justo dui. Donec id ullamcorper lacus, ut accumsan orci</p>
                                    </div>

                                    <div class="view-more">
                                        <span>Read Review</span>
                                        <span class="icon-book"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

const homeComponent = new HomeComponent();

document.querySelector('#root').appendChild(homeComponent.domNode);
homeComponent.compile();