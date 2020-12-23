import env from './env';

/**
 * 获取当前环境参数
 * @param {String} key 环境参数key值
 */
function getEnvParams(key) {
    if(DEV_MODE) {
        return env.dev[key];
    }
    else {
        return env.prod[key];
    }
}

export {
    getEnvParams
}