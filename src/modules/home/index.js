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

                <div class="client-reviews" client-reviews=""></div>
            </div>
        </div>
        `;
    }

    render() {
        clientReviewComponent.compile();

        super.render();

        this.findElement('[client-reviews]').appendChild(clientReviewComponent.domNode);
    }
}

const homeComponent = new HomeComponent();
homeComponent.compile();

document.querySelector('#root').appendChild(homeComponent.domNode);