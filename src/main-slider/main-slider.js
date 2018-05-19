import "./main-slider.less"
const sliderPager = `
            <div class="main-slider-wrapper__screen__pager-item active"></div>
            <div class="main-slider-wrapper__screen__pager-item"></div>
            <div class="main-slider-wrapper__screen__pager-item"></div>
            <div class="main-slider-wrapper__screen__pager-item"></div>`;

class Slider {
    constructor(cssSelector) {
        this.rootElement = document.querySelector(cssSelector);
        this.slides = this.rootElement.querySelectorAll('.main-slider-wrapper__screen');
        this.slideIndex = 0;
        this.pagerIndex = 0;
        this.intervalIdSlides = 0;
        this.intervalIdPager = 0;

        this.init();
    }

    init() {
        this.render();
        this.autoShowSlides();
        this.autoShowPager();
        this.handleEvents();

    }

    render() {
        this.domElement = document.createElement('div');
        this.domElement.classList.add('main-slider-wrapper__screen__pager-wrapper');

        this.domElement.innerHTML = sliderPager;
        this.rootElement.appendChild(this.domElement);
        this.pager = this.domElement.querySelectorAll('.main-slider-wrapper__screen__pager-item');
    }

    handleEvents() {

        this.rootElement.addEventListener('mouseenter', ()=> {
            clearInterval(this.intervalIdSlides);
        });

        this.rootElement.addEventListener('mouseleave', ()=> {
            this.autoShowSlides();
        });

        this.rootElement.addEventListener('mouseenter', ()=> {
            clearInterval(this.intervalIdPager);
        });

        this.rootElement.addEventListener('mouseleave', ()=> {
            this.autoShowPager();
        });

        this.pager.forEach((item, i)=> {
            item.addEventListener('click', (e)=> {
                this.slideIndex = i;
                this.pagerIndex = i;
                if(e.target) {
                    this.goToSlide(this.slideIndex);
                    if(!(e.target.classList.contains('active'))) {
                        this.pager.forEach((el)=> el.classList.remove('active'));
                        e.target.classList.add('active');
                    }
                }
            })
        })
    }

    nextSlide() {
        this.goToSlide(this.slideIndex + 1)
    }

    nextPager() {
        this.goToPager(this.pagerIndex + 1)
    }



    goToSlide(n) {
        this.slides.forEach((el)=> el.classList.remove('active'));
        this.slideIndex = (n + this.slides.length)%this.slides.length;
        this.slides[this.slideIndex].classList.add('active');
    }

    goToPager(n) {
        this.pager.forEach((el) => el.classList.remove('active'));
        this.pagerIndex = (n + this.pager.length)%this.pager.length;
        this.pager[this.pagerIndex].classList.add('active');
    }

    autoShowSlides() {
        this.intervalIdSlides = setInterval(this.nextSlide.bind(this), 8000);
    }

    autoShowPager() {
        this.intervalIdPager = setInterval(this.nextPager.bind(this), 8000);
    }

}


export {Slider};