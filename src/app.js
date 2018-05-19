import './styles.less';
import { Slider } from "./main-slider/main-slider";
import { ReviewSlider } from "./reviews/rewies_slider";
import {Menu} from "./header/header";

const mySlider = new Slider('.slider-1');
const myReviewSlider = new ReviewSlider('.slider-2');
const myMenu = new Menu('.menu-1');

window.mySlider = mySlider;
window.myReviewSlider = myReviewSlider;
window.myMenu = myMenu;