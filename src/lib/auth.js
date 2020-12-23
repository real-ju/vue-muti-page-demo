import Vue from 'vue'

function login(username, password) {
    if(username == 'admin'&&password == '123456') {
        Vue.$localStorage.set('isLogin', true);
        return true;
    }
    return false;
}

function logout() {
    Vue.$localStorage.remove('isLogin');
    return true;
}

function isLogin() {
    if(Vue.$localStorage.get('isLogin')) {
        return true;
    }
    return false;
}

export default {
    login,
    logout,
    isLogin
}