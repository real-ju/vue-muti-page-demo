import { getEnvParams } from './util'
import Vue from 'vue'

import anime from 'animejs/lib/anime.es.js'

/**
 * 配置anime
 */
function configAnime() {
    Vue.prototype.anime = anime;
}


export default {
    configAnime
}