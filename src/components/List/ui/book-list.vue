<style scoped>
.book-list {
    width: 100%;
}

.book-item {
    width: 100%;
    height: 120px;
    margin-bottom: 10px;
    position: relative;
}

.book-cover {
    width: 80px;
    height: 100%;
    vertical-align: top;
    position: absolute;
    top: 0px;
    left: 0px;
}

.book-info {
    display: inline-block;
    height: 100%;
    vertical-align: top;
    padding-left: 10px;
    position: absolute;
    top: 0px;
    left: 80px;
}

.book-info a {
    color: #515a6e;
}

.book-rate {
    line-height: 20px;
}

.book-rate >>> .ivu-rate-text {
    vertical-align: top;
}
</style>

<template>
    <div class="book-list">
        <!-- 通过scope访问基础组件的数据和方法 -->
        <div class="book-item" v-for="(item,index) in scope.data" :key="item.id">
            <img class="book-cover" :src="bookCoverUrls[index]" :alt="item.name">
            <div class="book-info">
                <a href="javascript:void(0)">
                    <h3>{{ item.name }}</h3>
                </a>
                <p class="book-rate">
                    <Rate show-text allow-half disabled v-model="item.score">
                        <span style="color: #f5a623">{{ item.score }}</span>
                    </Rate>
                </p>
                <p>{{ item.meta }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import ui from '@lib/interface/comp.ui.mixin'

import bookCover1 from '@img/component-definition/book-cover-1.jpg'
import bookCover2 from '@img/component-definition/book-cover-2.jpg'
import bookCover3 from '@img/component-definition/book-cover-3.jpg'
import bookCover4 from '@img/component-definition/book-cover-4.jpg'

export default {
    name: 'BookList',
    mixins: [ui], // UI组件接口
    data() {
        return {
            bookCoverUrls: [
                bookCover1,
                bookCover2,
                bookCover3,
                bookCover4
            ]
        }
    }
}
</script>