//Vue
import Vue from 'vue'
import store from './store'
// import components from './config/components'

//第三方库
import VueWebStorage from 'vue-web-storage'
import 'animate.css/animate.min.css'

//全局CSS
import '@/style/main.less'

//启动配置文件
import boot from './config/boot'

boot.configAnime(); //配置Anime


//调用Vue插件
Vue.use(VueWebStorage, { prefix: 'tencent_fake_' });

//注册Vue全局组件
// components.reg();

function createVue(options) {
    let vm = new Vue({
        el: '#app',
        store,
        ...options
    })

    return vm
}

export default createVue