// 自定义验证器

import util from '@lib/util'

export default {
    arrNotEmpty
}

// 判断数组是否不为空
function arrNotEmpty(value) {
    return !util.arr.isEmpty(value)
}