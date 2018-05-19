import './reviews.less';


class ReviewSlider {
    constructor(cssSelector) {
        this.rootElement = document.querySelector(cssSelector);
        this.previousEl = this.rootElement.querySelector('.reviews__slider__prev-slide');
        this.nextEl = this.rootElement.querySelector('.reviews__slider__next-slide');
        this.slidesAvatar = this.rootElement.querySelectorAll('.reviews__slider__avatar__image');
        this.slidesReview = this.rootElement.querySelectorAll('.reviews__slider__review__text');
        this.slidesAuthor = this.rootElement.querySelectorAll('.reviews__slider__author__text');
        this.slideIndexAvatar = 0;
        this.slideIndexReview = 0;
        this.slideIndexAuthor = 0;
        this.intervalIdSlides = 0;

        this.init();
    }

    init() {
        this.autoShowSlides();
        this.handleEvents();
    }


    handleEvents() {
        this.previousEl.addEventListener('click', (e) => {
            if (e.target) {
                this.previousSlide();
            }
        });

        this.nextEl.addEventListener('click', (e) => {
            if (e.target) {
                this.nextSlide();
            }
        });

        this.rootElement.addEventListener('mouseenter', ()=> {
            clearInterval(this.intervalIdSlides);
        });

        this.rootElement.addEventListener('mouseleave', ()=> {
            this.autoShowSlides();
        });

    }

    previousSlide() {
        this.goToSlideAvatar(this.slideIndexAvatar - 1);
        this.goToSlideReview(this.slideIndexReview - 1);
        this.goToSlideAuthor(this.slideIndexAuthor - 1);
    }

    nextSlide() {
        this.goToSlideAvatar(this.slideIndexAvatar + 1);
        this.goToSlideReview(this.slideIndexReview + 1);
        this.goToSlideAuthor(this.slideIndexAuthor + 1);
    }



    goToSlideAvatar(n) {
        this.slidesAvatar.forEach((el)=> el.classList.remove('active'));
        this.slideIndexAvatar = (n + this.slidesAvatar.length)%this.slidesAvatar.length;
        this.slidesAvatar[this.slideIndexAvatar].classList.add('active');
    }

    goToSlideReview(n) {
        this.slidesReview.forEach((el)=> el.classList.remove('active'));
        this.slideIndexReview = (n + this.slidesReview.length)%this.slidesReview.length;
        this.slidesReview[this.slideIndexReview].classList.add('active');
    }

    goToSlideAuthor(n) {
        this.slidesAuthor.forEach((el)=> el.classList.remove('active'));
        this.slideIndexAuthor = (n + this.slidesAuthor.length)%this.slidesAuthor.length;
        this.slidesAuthor[this.slideIndexAuthor].classList.add('active');
    }


    autoShowSlides() {
        this.intervalIdSlides = setInterval(this.nextSlide.bind(this), 6000);
    }

}


export {ReviewSlider};