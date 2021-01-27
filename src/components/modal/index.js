class ModalComponent extends Component {

    constructor(attachTo) {
        super();

        if (!attachTo) {
            throw new Error('attachTo is required.');
        }

        this.attachTo = attachTo;
    }

    get translate() {
        return TRANSLATIONS;
    }

    get componentSelector() {
        return 'modal-component';
    }

    get modalBodyNode() {
        return this.findElement('.modal-body');
    }

    get template() {
        return `
            <div class="backdrop"></div>

            <div class="modal-container">
                <div class="modal-header">
                    <div class="modal-heading">${this.data.heading}</div>

                    <div class="modal-close-icon">
                        <span>x</span>
                    </div>
                </div>

                <div class="modal-body"></div>

                <div class="modal-footer">
                    <a href="#" class="btn-close">${this.translate['common.close']}</a>
                </div>
            </div>
        `;
    }

    compile() {
        super.compile();

        this.findElement('.backdrop').addEventListener('click', () => {
            this.close();
        });

        this.findElement('.modal-close-icon').addEventListener('click', () => {
            this.close();
        });

        this.findElement('.btn-close').addEventListener('click', () => {
            this.close();
        });
    }

    open(data) {
        if (!data) {
            throw new Error('data is required.');
        }

        this.data = {
            heading: '',
            componentNode: null,
            footerActions: true,
            cssClasses: null,
            ...data
        };

        if (!this.data.componentNode) {
            throw new Error('componentNode is required.');
        }

        this.domNode.classList.add('open');

        this.attachTo.appendChild(this.domNode);

        this.compile();

        if (this.data.cssClasses) {
            this.findElement('.modal-container').classList.add(this.data.cssClasses);
        }

        this.modalBodyNode.classList.toggle('footer-action', this.data.footerActions);
        this.findElement('.modal-footer').classList.toggle('hide', !this.data.footerActions);

        this.modalBodyNode.appendChild(this.data.componentNode);
    }

    close() {
        this.destroy();
    }
}

const modalComponent = new ModalComponent(document.querySelector('#root'));