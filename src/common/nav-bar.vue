<style lang="less" scoped>
nav {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 2;
    width: 100%;
    height: 72px;
    transition: all 0.3s;

    @media screen and (max-width: 992px) {
        height: 56px;
    }
}

.nav-inner {
    width: 1200px;
    height: 100%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 992px) and (max-width: 1250px) {
        width: 100%;
        padding: 0px 24px;
    }

    @media screen and (max-width: 992px) {
        width: 100%;
        justify-content: center;
    }
}

.logo {
    width: 168px;
    height: 22px;

    a {
        display: block;
        width: 100%;
        height: 100%;
        font-size: 0px;
        background-size: 100% 100%;
    }

    @media screen and (max-width: 992px) {
        width: 136px;
        height: 18px;
    }
}

.action-box {
    width: 850px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 992px) {
        display: none;
    }
}

.menu {
    height: 100%;
    display: flex;
}

.menu-item {
    height: 100%;
    padding: 0px 36px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;

    & > a {
        font-weight: bold;
        opacity: 0.9;
        position: relative;

        &::after {
            content: "";
            display: block;
            width: 100%;
            height: 4px;
            position: absolute;
            bottom: -8px;
            left: 0px;
            background-color: #194ac3;
            opacity: 0;
            transform-origin: 50% 0%;
            transform: scaleX(0);
            transition: all 0.2s;
        }
    }
}

.menu-item:hover > a::after {
    opacity: 1;
    transform: scaleX(1);
}

.menu-item-trigger {
    width: 100%;
    height: 348px;
    position: absolute;
    top: 100%;
    left: 0px;
    z-index: 1;
}

.sub-menu {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0px;
    z-index: 2;
}

.sub-menu-item {
    width: 100%;
    padding: 14px 0px;
    text-align: center;
    cursor: pointer;

    & > a {
        color: #2b2e2e;
        opacity: 0.7;
    }
}

.sub-menu-item > a:hover {
    opacity: 1;
}

.menu-expand-mask {
    width: 100%;
    height: 420px;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: white;
    transform-origin: 50% 0%;
}

.lang-box {
    a {
        opacity: 0.7;
    }

    i {
        font-size: 12px;
        opacity: 0.7;
        margin: 0px 3px;
    }

    .current {
        opacity: 1;
    }
}

.white-nav {
    background-color: white;

    .logo {
        a {
            background-image: url("https://www.tencent.com/img/index/menu_logo_hover.png");
        }
    }

    .menu-item > a {
        color: #2b2e2e;
    }

    .lang-box {
        color: #2b2e2e;
    }

    .menu-open-icon {
        width: 20px;
        height: 20px;
        top: 18px;
        left: 18px;
        background-image: url("https://www.tencent.com/img/mobile/icon_menu_hover.png");
    }
}

.white-nav-expand {
    background-color: transparent;
}

.transparent-nav {
    background-color: transparent;

    .logo {
        a {
            background-image: url("https://www.tencent.com/img/index/menu_logo.png");
        }
    }

    .menu-item > a {
        color: rgb(248, 239, 239);
    }

    .lang-box {
        color: white;
    }

    .menu-open-icon {
        background-image: url("https://www.tencent.com/img/mobile/icon_menu.png");
    }
}

.hide-nav {
    top: -72px;
}

.menu-open-icon {
    display: none;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 22px;
    left: 22px;
    background-size: 100% 100%;
    z-index: 2;

    @media screen and (max-width: 992px) {
        display: block;
    }
}

.menu-close-icon {
    width: 14px;
    height: 14px;
    position: absolute;
    top: 22px;
    left: 22px;
    background-image: url("https://www.tencent.com/img/mobile/icon_menu_close.png");
    background-size: 100% 100%;
}

.menu-panel-mask {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.2);
}

.menu-panel {
    width: 260px;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: white;
    z-index: 2;
}

.panel-menu {
    width: 100%;
    margin-top: 90px;

    li {
        width: 100%;
        height: 64px;
        padding-left: 56px;
    }

    a {
        display: block;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: #2a2e2e;
        opacity: 0.95;
    }
}

.panel-lang-box {
    height: 64px;
    padding-left: 56px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    color: #2a2e2e;
    opacity: 0.95;

    i {
        color: #878a8a;
        margin: 0px 8px;
    }
}
</style>

<template>
    <nav :class="navClass">
        <div class="nav-inner">
            <h1 class="logo">
                <a href="/">Tencent腾讯</a>
            </h1>
            <div class="action-box">
                <ul class="menu" @mouseenter="expandMenu" @mouseleave="shrinkMenu">
                    <li class="menu-item" @mouseenter="expandSubMenu(0)" @mouseleave="shrinkSubMenu(0)">
                        <a href="#">简介</a>
                        <transition
                            @enter="subMenuShowAnime"
                            @leave="subMenuHideAnime"
                        >
                            <ul v-show="currentMenuIndex == 0" class="sub-menu">
                                <li class="sub-menu-item">
                                    <a href="#">公司简介</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">愿景及使命</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">发展历程</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">业务架构</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">管理团队</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">企业文化</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">办公地点</a>
                                </li>
                            </ul>
                        </transition>
                        <div v-show="expand" class="menu-item-trigger"></div>
                    </li>
                    <li class="menu-item" @mouseenter="expandSubMenu(1)" @mouseleave="shrinkSubMenu(1)">
                        <a href="#">业务</a>
                        <transition
                            @enter="subMenuShowAnime"
                            @leave="subMenuHideAnime"
                        >
                            <ul v-show="currentMenuIndex == 1" class="sub-menu">
                                <li class="sub-menu-item">
                                    <a href="#">面向用户</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">面向企业</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">面向科技</a>
                                </li>
                            </ul>
                        </transition>
                        <div v-show="expand" class="menu-item-trigger"></div>
                    </li>
                    <li class="menu-item" @mouseenter="expandSubMenu(2)" @mouseleave="shrinkSubMenu(2)">
                        <a href="#">员工</a>
                        <transition
                            @enter="subMenuShowAnime"
                            @leave="subMenuHideAnime"
                        >
                            <ul v-show="currentMenuIndex == 2" class="sub-menu">
                                <li class="sub-menu-item">
                                    <a href="#">人才发展</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">腾讯学院</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">工作环境</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">员工活动</a>
                                </li>
                            </ul>
                        </transition>
                        <div v-show="expand" class="menu-item-trigger"></div>
                    </li>
                    <li class="menu-item" @mouseenter="expandSubMenu(3)" @mouseleave="shrinkSubMenu(3)">
                        <a href="#">社会责任</a>
                        <transition
                            @enter="subMenuShowAnime"
                            @leave="subMenuHideAnime"
                        >
                            <ul v-show="currentMenuIndex == 3" class="sub-menu">
                                <li class="sub-menu-item">
                                    <a href="#">践行承诺</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">支持善举</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">鼓励创新</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">企业社会责任报告</a>
                                </li>
                            </ul>
                        </transition>
                        <div v-show="expand" class="menu-item-trigger"></div>
                    </li>
                    <li class="menu-item" @mouseenter="expandSubMenu(4)" @mouseleave="shrinkSubMenu(4)">
                        <a href="#">投资者</a>
                        <transition
                            @enter="subMenuShowAnime"
                            @leave="subMenuHideAnime"
                        >
                            <ul v-show="currentMenuIndex == 4" class="sub-menu">
                                <li class="sub-menu-item">
                                    <a href="#">财务新闻</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">公告及财务报告</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">业绩电话会</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">投资者工具包</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">证券及债券信息</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">企业管治</a>
                                </li>
                            </ul>
                        </transition>
                        <div v-show="expand" class="menu-item-trigger"></div>
                    </li>
                    <li class="menu-item" @mouseenter="expandSubMenu(5)" @mouseleave="shrinkSubMenu(5)">
                        <a href="#">媒体</a>
                        <transition
                            @enter="subMenuShowAnime"
                            @leave="subMenuHideAnime"
                        >
                            <ul v-show="currentMenuIndex == 5" class="sub-menu">
                                <li class="sub-menu-item">
                                    <a href="#">企业动态</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">财务新闻</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">腾讯视角</a>
                                </li>
                                <li class="sub-menu-item">
                                    <a href="#">媒体资料库</a>
                                </li>
                            </ul>
                        </transition>
                        <div v-show="expand" class="menu-item-trigger"></div>
                    </li>
                </ul>
                <div class="lang-box">
                    <a class="current" href="#">简</a>
                    <i>/</i>
                    <a href="#">繁</a>
                    <i>/</i>
                    <a href="#">EN</a>
                </div>
            </div>
        </div>
        <transition
            @enter="maskShowAnime"
            @leave="maskHideAnime"
        >
            <div v-show="expand" class="menu-expand-mask"></div>
        </transition>
        <div class="menu-open-icon" @click="openMenuPanel"></div>
        <div v-show="menuPanelShow" class="menu-panel-mask" @click="closeMenuPanel"></div>
        <transition
            @enter="menuPanelShowAnime"
            @leave="menuPanelHideAnime"
        >
            <div v-show="menuPanelShow" class="menu-panel">
                <div class="menu-close-icon" @click="closeMenuPanel"></div>
                <ul class="panel-menu">
                    <li>
                        <a href="#">简介</a>
                    </li>
                    <li>
                        <a href="#">业务</a>
                    </li>
                    <li>
                        <a href="#">员工</a>
                    </li>
                    <li>
                        <a href="#">企业责任</a>
                    </li>
                    <li>
                        <a href="#">投资者</a>
                    </li>
                    <li>
                        <a href="#">媒体</a>
                    </li>
                </ul>
                <div class="panel-lang-box">
                    <a href="#">简体</a>
                    <i>|</i>
                    <a href="#">繁体</a>
                    <i>|</i>
                    <a href="#">English</a>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script>
import util from '@lib/util'

export default {
    data() {
        return {
            expand: false,
            currentMenuIndex: -1,
            scrollDirection: 'down',
            pageScroll: 0,
            menuPanelShow: false
        }
    },
    computed: {
        navClass() {
            if(this.pageScroll < 30) {
                if(this.expand) {
                    return 'white-nav white-nav-expand'
                }
                else {
                    return 'transparent-nav'
                }
            }
            else if(this.pageScroll >= 30&&this.pageScroll < 50) {
                return 'white-nav'
            }
            else {
                if(this.scrollDirection == 'down') {
                    return 'white-nav hide-nav'
                }
                else {
                    return 'white-nav'
                }
            }
        }
    },
    created() {
        this.handleScroll();
    },
    methods: {
        openMenuPanel() {
            this.menuPanelShow = true;
        },
        closeMenuPanel() {
            this.menuPanelShow = false;
        },
        handleScroll() {
            window.addEventListener('scroll', event => {
                let scrollTop = util.getPageScrollY();
                if(scrollTop > this.pageScroll) {
                    this.scrollDirection = 'down';
                }
                else {
                    this.scrollDirection = 'up';
                }

                this.pageScroll = scrollTop;
            })
        },
        expandMenu() {
            this.expand = true;
        },
        shrinkMenu() {
            this.expand = false;
        },
        expandSubMenu(index) {
            this.currentMenuIndex = index;
        },
        shrinkSubMenu(index) {
            this.currentMenuIndex = -1;
        },
        maskShowAnime(el, done) {
            this.anime({
                targets: el,
                scaleY: [0, 1],
                opacity: [0, 1],
                easing: 'linear',
                duration: 150,
                complete() {
                    done();
                }
            })
        },
        maskHideAnime(el, done) {
            this.anime({
                targets: el,
                scaleY: [1, 0],
                opacity: [1, 0],
                easing: 'linear',
                duration: 150,
                complete() {
                    done();
                }
            })
        },
        subMenuShowAnime(el, done) {
            this.anime({
                targets: el,
                translateY: [-30, 0],
                opacity: [0, 1],
                easing: 'linear',
                duration: 150,
                complete() {
                    done();
                }
            })
        },
        subMenuHideAnime(el, done) {
            this.anime({
                targets: el,
                translateY: [0, -30],
                opacity: [1, 0],
                easing: 'linear',
                duration: 150,
                complete() {
                    done();
                }
            })
        },
        menuPanelShowAnime(el, done) {
            this.anime({
                targets: el,
                translateX: [-260, 0],
                easing: 'linear',
                duration: 250,
                complete() {
                    done();
                }
            })
        },
        menuPanelHideAnime(el, done) {
            this.anime({
                targets: el,
                translateX: [0, -260],
                easing: 'linear',
                duration: 250,
                complete() {
                    done();
                }
            })
        },
    }
}
</script>