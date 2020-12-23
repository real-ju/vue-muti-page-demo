<script>
import base from '@lib/interface/comp.base.mixin' // 基础组件接口
import selfComp from './index.mixin' // 基础组件定义

export default {
    name: 'List',
    mixins: [base, selfComp] // 在selfComp前面加上父组件的定义mixin就可以实现继承
}
</script>