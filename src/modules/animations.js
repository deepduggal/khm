import {TweenMax} from "gsap";

export default {

    slideIn (el, time = 0.2, settings={width: '100%'}) {
        return TweenMax.to(el, time, settings);
    },

    slideOut (el, time = 0.2, settings={width: 0}) {
        return TweenMax.to(el, time, settings);
    },

    fadeIn (el, time = 0.2, settings = {display: 'block', opacity: 1}) {
        return TweenMax.to(el, time, settings);
    },

    fadeOut (el, time = 0.2, settings = {display: 'none', opacity: 0}) {
        return TweenMax.to(el, time, settings);
    }
}