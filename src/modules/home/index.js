class HomeComponent extends Component {

    constructor() {
        super();

        const locationMapper = LOCATIONS.results.map(item => {
            item.location = `${item.placeName}, ${item.postalCode}`

            return item;
        });
        this.autocompleteComponent = new AutocompleteComponent(locationMapper, 'location');
        this.dropdownComponent = new DropdownComponent(LAW_CATEGORY, 'description');
        this.dropdownComponent.compile();
    }

    get componentSelector() {
        return 'home-component';
    }

    get translate() {
        return TRANSLATIONS;
    }

    get autocompleteNode() {
        return this.findElement('[autocomplete-outlet]');
    }

    get dropdownNode() {
        return this.findElement('[dropdown]');
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
                                <span class="input-label">${this.translate['home.findLocationLabel']}</span>
                                <input type="text"
                                    class="input input-find-location"
                                    maxlength="50" />
                            </div>
                            <div autocomplete-outlet="" class="autocomplete-container"></div>
                        </div>
                    </div>

                    <div class="find-category">
                        <p class="quick-input-helper">
                            <label>${this.translate['home.chooseCategory']}</label>
                        </p>
                        <div class="quick-input-container dropdown" dropdown="">
                            <div class="quick-input-label">2</div>
                            <div class="quick-input select">
                                <span class="input-label">${this.translate['home.chooseCategoryLabel']}</span>
                                <input type="button"
                                    class="input input-find-category" />
                                <span class="icon-down-open"></span>
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

        this.autocompleteComponent.onClick(item => {
            this.findElement('.input-find-location').value = item.location;
        });

        this.dropdownComponent.onClick(item => {
            this.dropdownComponent.detach();
            this.dropdownNode.querySelector('.input-label').classList.add('hide');
            this.findElement('.input-find-category').value = item.description;

            const modalSubCategoryComponent = new ModalSubCategoryComponent(item.id);
            modalSubCategoryComponent.compile();

            modalComponent.open({
                footerActions: false,
                componentNode: modalSubCategoryComponent.domNode
            });
        });

        this.findElement('.input-find-location').addEventListener('keyup', event => {
            const placeholder = event.target.parentNode.querySelector('.input-label');
            const value = event.currentTarget.value.trim();

            this.autocompleteComponent.detach();

            placeholder.classList.toggle('hide', value);

            if (value) {
                this.autocompleteComponent.findItem(event.currentTarget.value, ['location']);
                this.autocompleteNode.appendChild(this.autocompleteComponent.domNode);
            }
        });

        this.findElement('.input-find-location').addEventListener('blur', () => {
            // @README: hack for now
            setTimeout(() => {
                this.autocompleteComponent.detach();
            }, 100);
        });

        this.findElement('.input-find-category').addEventListener('click', event => {
            this.dropdownNode.appendChild(this.dropdownComponent.domNode);
        });

        this.findElement('.input-find-category').addEventListener('blur', () => {
            // @README: hack for now
            setTimeout(() => {
                this.dropdownComponent.detach();
            }, 100);
        });
    }
}

const homeComponent = new HomeComponent();
homeComponent.compile();

document.querySelector('#root').appendChild(homeComponent.domNode);