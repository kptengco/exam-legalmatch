class DropdownComponent extends Component {

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
        this.subscribers = [];

        this.domNode.addEventListener('click', event => {
            const target = event.target;

            if (target.classList.contains('list-item')) {
                const index = +target.getAttribute('index');

                for (const callback of this.subscribers) {
                    callback(this.list[index]);
                }
            }
        });
    }

    get componentSelector() {
        return 'dropdown-component';
    }

    get template() {
        if (!this.list.length) {
            return '';
        }

        const ul = document.createElement('ul');
        ul.classList.add('list');

        for (let index = 0; index < this.list.length; index++) {
            const item = this.list[index];

            const li = document.createElement('li');

            li.classList.add('list-item');
            li.setAttribute('index', index);
            li.innerHTML = item[this.fieldToDisplay];

            ul.appendChild(li);
        }

        return ul.outerHTML;
    }

    onClick(fnCallback) {
        if (typeof fnCallback === 'function') {
            this.subscribers.push(fnCallback);
        }
    }
}