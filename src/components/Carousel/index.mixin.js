export default {
    props: {
        data: {
            // 列表数据
            type: Array,
            default: () => {
                /**
                 * 数组项规范：
                 * {
                 * src: '' 图片url地址,
                 * desc: {} 自定义描述
                 * }
                 */
                return []
            }
        },
        autoPlay: {
            // 自动轮播
            type: Boolean,
            default: true
        },
        duration: {
            // 自动轮播间隔时间(ms)
            type: Number,
            default: 3000
        },
        showPageButton: {
            // 是否显示上下页按钮
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            currentItemIndex: 1,
            timer: null
        }
    },
    computed: {
        currentItem() {
            return this.data[this.currentItemIndex]
        }
    },
    mounted() {
        if(this.autoPlay) {
            this.initAutoPlay();
        }
    },
    beforeDestroy() {
        if(this.autoPlay) {
            clearInterval(this.timer);
        }
    },
    methods: {
        initAutoPlay() {
            this.timer = setInterval(() => {
                this.nextItem();
            }, this.duration)
        },
        beforeItem() {
            if(this.currentItemIndex == 0) {
                this.currentItemIndex = this.data.length - 1;
            }
            else {
                this.currentItemIndex--;
            }
        },
        nextItem() {
            if(this.currentItemIndex == this.data.length - 1) {
                this.currentItemIndex = 0;
            }
            else {
                this.currentItemIndex++;
            }
        },
        toItemAction(index) {
            this.currentItemIndex = index;
            if(this.autoPlay) {
                clearInterval(this.timer);
                this.initAutoPlay();
            }
        },
        // 上一页操作
        beforeItemAction() {
            this.beforeItem();
            if(this.autoPlay) {
                clearInterval(this.timer);
                this.initAutoPlay();
            }
        },
        // 下一页操作
        nextItemAction() {
            this.nextItem();
            if(this.autoPlay) {
                clearInterval(this.timer);
                this.initAutoPlay();
            }
        }
    }
}