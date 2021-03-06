class ModalCategoryComponent extends Component {
    
    constructor() {
        super();

        this.list = OTHER_LAW_CATEGORY;
    }

    get componentSelector() {
        return 'modal-category-component';
    }

    get translate() {
        return TRANSLATIONS;
    }

    get template() {
        if (!this.list.length) {
            return '';
        }

        const rootDiv = document.createElement('div');
        rootDiv.classList.add('list');

        for (let index = 0; index < this.list.length; index++) {
            const item = this.list[index];

            const div = document.createElement('div');

            div.classList.add('list-item');
            div.innerHTML = `
                <a href="#" class="category-link">
                    <span>${item.description}</span>
                </a>
            `;

            rootDiv.appendChild(div);
        }

        return `
            <div class="heading">
                <span class="heading-label">${this.translate['modal.category.other']}</span>
                <span class="heading-sub-label">${this.translate['modal.category.chooseCategory']}</span>
            </div>

            ${rootDiv.outerHTML}
        `;
    }
}

class ModalSubCategoryComponent extends Component {

    constructor(categoryId) {
        super();

        if (!categoryId) {
            throw new Error('categoryId is required.');
        }

        this.data = LAW_SUBCATEGORY.filter(item => item.id === categoryId).pop() || {};
    }

    get componentSelector() {
        return 'modal-sub-category-component';
    }

    get translate() {
        return TRANSLATIONS;
    }

    get template() {
        if (!this.data.list.length) {
            return '';
        }

        const rootDiv = document.createElement('div');
        rootDiv.classList.add('list');

        for (let index = 0; index < this.data.list.length; index++) {
            const item = this.data.list[index];

            const div = document.createElement('div');

            div.classList.add('list-item');
            div.innerHTML = `
                <label>
                    <input type="checkbox" class="cb-input" />
                    <span>${item.description}</span>
                </label>
            `;

            rootDiv.appendChild(div);
        }

        return `
            <div class="heading">
                <span class="heading-indicator">3</span>
                <span class="heading-label">${this.translate['modal.category.heading'].replace('__category__', `<span class="highlight">${this.data.category}</span>`)}</span>
            </div>

            ${rootDiv.outerHTML}

            <div class="btn-actions">
                <button type="button" class="btn-find-lawyer">${this.translate['modal.category.findALawyer']}</button>
            </div>
        `;
    }
}