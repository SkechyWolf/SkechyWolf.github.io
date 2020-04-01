const Toast = {
    init() {
        this.hideTimeout = null;

        this.el = document.createElement('div');
        this.el.className = 'toast';
        document.body.appendChild(this.el);
    },

    show(message, state, time) {
        clearTimeout(this.hideTimeout);
        if(!message) return `Invalid Message`
        if(message.length > 45) return `Message Must Be Under 45 Chracters`

        this.el.textContent = message;
        this.el.className = 'toast toast--visible';

        if(state) {
            this.el.classList.add(`toast--${state}`)
        }
        
        if(time) {
        this.hideTimeout = setTimeout(() => {
            this.el.classList.remove('toast--visible')
        }, time);
        } else {
        this.hideTimeout = setTimeout(() => {
            this.el.classList.remove('toast--visible')
        }, 1500);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => Toast.init());