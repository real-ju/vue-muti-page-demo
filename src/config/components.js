// Vue全局组件
import Vue from 'vue'

import xxx from '@c/xxx'

import yyy from '@v/common/yyy'


function reg() {
    Vue.component('xxx', xxx);
    
    Vue.component('yyy', yyy);
}

export default {
    reg
}