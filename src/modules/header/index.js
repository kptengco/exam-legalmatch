class HeaderComponent extends Component {

    get componentSelector() {
        return 'header-component';
    }

    get translate() {
        return TRANSLATIONS;
    }

    get template() {
        return `
        <div class="brand">
            <div class="logo"></div>

            <div class="slogan">${this.translate['common.slogan']}</div>
        </div>

        <div class="key-factors">
            <ul class="factors">
                <li class="key-item">
                    <span class="icon-ok"></span>
                    <span class="key-item-label">${this.translate['common.keyFactor.noFee']}</span>
                </li>
                <li class="key-item">
                    <span class="icon-ok"></span>
                    <span class="key-item-label">${this.translate['common.keyFactor.chooseInYourArea']}</span>
                </li>
                <li class="key-item">
                    <span class="icon-ok"></span>
                    <span class="key-item-label">${this.translate['common.keyFactor.confidentialService']}</span>
                </li>
            </ul>
        </div>
        `;
    }
}

const headerComponent = new HeaderComponent();

document.querySelector('#root').appendChild(headerComponent.domNode);
headerComponent.compile();