// 基础组件定义Mixin
export default {
    props: {
        ui: {
            // UI组件接口
            type: Object,
            default: () => {
                return null
            }
        },
        meta: {
            // 用于控制UI组件的元信息
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    render: function(h) {
        let uiComponent = this.ui;
        if(uiComponent == null) {
            return h('div', '没有定义UI组件或不能直接调用！')
        }
        else {
            return h(uiComponent, {
                props: {
                    scope: this, // 将基础组件的数据和方法（实例）暴露给UI组件
                    meta: this.meta // 通过meta属性获取控制元信息
                }
            })
        }
    }
}