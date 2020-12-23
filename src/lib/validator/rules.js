// 预设验证规则

export default {
    mobile: {
        pattern: /^1\d{10}$/,
        message: '手机号格式错误'
    },
    tel: {
        pattern: /^[\d-]+$/,
        message: '电话号码格式错误'
    },
    idCard: {
        pattern: /^\d{17}[\dXx]$/,
        message: '身份证号格式错误'
    },
    bankCard: {
        pattern: /^\d{16}$|^\d{17}$|^\d{19}$/,
        message: '银行卡号格式错误'
    }
}