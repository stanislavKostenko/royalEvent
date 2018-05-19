class Menu {
    constructor(cssSelector) {
        this.root = document.querySelector(cssSelector);
        this.menuButton = this.root.querySelector('.header__nav__menu');
        this.menu = this.root.querySelector('.header__nav__list');
        this.init();
    }

    init() {
        this.handleEvents();
    }

    handleEvents() {
        this.menuButton.addEventListener('click', (e)=> {
            if (e.target) {
                if(!(this.menu.classList.contains('active'))) {
                    this.menu.classList.add('active');
                } else {
                    this.menu.classList.remove('active');
                }
            }
        });
    }
}

export {Menu}