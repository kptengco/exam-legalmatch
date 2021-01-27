class AutocompleteComponent extends Component {

    constructor(list, fieldToDisplay) {
        super();

        if (!fieldToDisplay) {
            throw new Error('fieldToDisplay is required.');
        }
        
        if (!Array.isArray(list)) {
            throw new Error('list is not an array.');
        }

        this.fieldToDisplay = fieldToDisplay;
        this.list = list;
        this.filteredList = [];
        this.pattern = null;
        this.value = null;
        this.subscribers = [];

        this.domNode.addEventListener('click', event => {
            let target = event.target;

            if (event.target.classList.contains('highlight')) {
                target = event.target.parentNode;
            }

            if (target.classList.contains('list-item')) {
                const index = +target.getAttribute('index');

                for (const callback of this.subscribers) {
                    callback(this.filteredList[index]);
                }
            }
        });
    }

    get componentSelector() {
        return 'autocomplete-component';
    }

    get template() {
        if (!this.filteredList.length) {
            return '';
        }

        const ul = document.createElement('ul');
        ul.classList.add('list');

        for (let index = 0; index < this.filteredList.length; index++) {
            const item = this.filteredList[index];

            const li = document.createElement('li');

            li.classList.add('list-item');
            li.setAttribute('index', index);
            li.innerHTML = item[this.fieldToDisplay].replace(this.pattern, `<span class="highlight">${this.value}</span>`);

            ul.appendChild(li);
        }

        return ul.outerHTML;
    }

    onClick(fnCallback) {
        if (typeof fnCallback === 'function') {
            this.subscribers.push(fnCallback);
        }
    }

    escapeRegex(value) {
        return value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    findItem(value, filters) {
        if (!value) {
            throw new Error('value is required.');
        }

        if (!Array.isArray(filters)) {
            throw new Error('filters is not an array.');
        }

        this.value = value;
        this.pattern = new RegExp(this.escapeRegex(value), 'i');

        this.filteredList = this.list.filter(item => {
            let matches = true;

            for (const field of filters) {
                if (item[field].toString().match(this.pattern) === null) {
                    matches = false;
                }
            }

            return matches;
        });

        this.compile();
    }
}
