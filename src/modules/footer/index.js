class FooterComponent extends Component {

    get componentSelector() {
        return 'footer-component';
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

        <div class="links">
            <ul class="nav-menu">
                <li class="menu-item">
                    <span class="divider">&bull;</span>
                    <a href="#">${this.translate['page.userAgreement']}</a>
                </li>
                <li class="menu-item">
                    <span class="divider">&bull;</span>
                    <a href="#">${this.translate['page.privacyPolicy']}</a>
                </li>
                <li class="menu-item">
                    <span class="divider">&bull;</span>
                    <a href="#">${this.translate['page.siteMap']}</a>
                </li>
            </ul>

            <div class="copyright">
                <span>${this.translate['common.copyrightText']}</span>
            </div>
        </div>

        <div class="license">
            <div class="truste"></div>

            <div class="bbb"></div>
        </div>
        `;
    }
}

const footerComponent = new FooterComponent();
footerComponent.compile();

document.querySelector('#root').appendChild(footerComponent.domNode);