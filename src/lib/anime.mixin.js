import anime from 'animejs/lib/anime.es.js';

const animeSet = {
    fadeIn,
    fadeOut,
    slideUp,
    slideUpDelay,
    slideDownQuick
}

// 淡入
function fadeIn(el) {
    anime({
        targets: el,
        opacity: [0, 1],
        duration: 1000
    })
}

// 淡出
function fadeOut(el) {
    anime({
        targets: el,
        opacity: [1, 0],
        duration: 1000
    })
}

// 上滑动
function slideUp(el) {
    anime({
        targets: el,
        translateY: [50, 0]
    })
}

// 延迟上滑动
function slideUpDelay(el) {
    anime({
        targets: el,
        translateY: [50, 0],
        delay: 500
    })
}

// 快速下滑动
function slideDownQuick(el) {
    anime({
        targets: el,
        translateY: [-50, 0],
        easing: 'easeInOutExpo',
        duration: 500
    })
}

export default {
    created: function() {
        this._anime = animeSet;
    }
}