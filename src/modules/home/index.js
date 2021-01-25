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
                        <p>
                            <label>${this.translate['home.findLocation']}</label>
                            <div class="quick-input-container" for="location">
                                <div class="quick-input-label">1</div>
                                <div class="quick-input">
                                    <input type="text"
                                        name="location"
                                        placeholder="${this.translate['home.findLocationLabel']}"
                                        maxlength="50" />
                                </div>
                            </div>
                        </p>
                    </div>

                    <div class="find-category">
                    </div>
                </div>

                <div class="client-reviews" client-reviews=""></div>
            </div>
        </div>
        `;
    }
}

const homeComponent = new HomeComponent();

document.querySelector('#root').appendChild(homeComponent.domNode);
homeComponent.compile();