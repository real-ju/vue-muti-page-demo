// UI组件定义Mixin
export default {
    props: {
        scope: {
            type: Object,
            default: () => {
                return {}
            }
        },
        meta: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}