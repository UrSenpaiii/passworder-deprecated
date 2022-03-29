<!--<v-tree-element v-for="el in tree" :key="el.id" :sub="true" :node="el"></v-tree-element>-->
<template>
    <li class="sitemap-list-item position-relative">
        <!-- ico / title -->
        <i :class="[iconsColor, 'fa-folder', 'mr-1']" @click="showSubBlock()"></i>
        <a :href="'/' + link + node.alias" class="position-absolute" style="left: 25px" :title="node.title">{{ cut }}</a>
        <transition name="sub-list-animation">
            <ul v-if="showSub" class="sub-list">
                <node v-for="child in node.childs" :key="child.alias" :data="child" :sub="true" :node="child"></node>
                <node v-for="article in node.articles" :key="article.alias" :node="article"></node>
            </ul>
        </transition>
    </li>
</template>

<script>
    export default {
        name: "node",
        props: {node: Object, sub: Boolean},
        data() {
            return {
                showSub: false
            }
        },
        computed: {
            iconsColor() {
                return this.sub ? 'fas ico-lighter' : 'far'
            },
            link() {
                return this.sub ? 'catalog/' : 'articles/'
            },
            cut() {
                return this.node.title.length > 16 ? this.node.title.slice(0, 16) + "..." : this.node.title;
            }
        },
        methods: {
            showSubBlock() {
                if (this.sub) {
                    this.showSub = !this.showSub
                    event.target.classList.toggle('fa-folder-open')
                }
            }
        }
    }
</script>

<style scoped>
    .sitemap-list-item {
        padding: .1em;
    }

    .sub-list {
        margin-left: 1.1em;
    }

    .sub-list-animation-enter-active {
        transition: all .3s ease;
    }

    .sub-list-animation-leave-active {
        transition: all .3s ease;
    }

    .sub-list-animation-enter, .sub-list-animation-leave-to {
        transform: translateY(-10px);
        opacity: 0;
    }
</style>
