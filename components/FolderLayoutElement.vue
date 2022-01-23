<template>
  <li class="sitemap-list-item position-relative">
    <!-- ico / title -->
    <i :class="iconsColor + ' fa-folder mr-1'" @click="showSubBlock()"></i>
    <a :href="'/' + link + node.alias" class="position-absolute" style="left: 25px">{{ node.title }}</a>
    <transition name="sub-list-animation">
      <ul v-if="showSub" class="sub-list">
        <!-- childs -->
        <node v-for="child in node.childs" :key="child.id" :sub="true" :node="child"></node>
        <!-- nodes -->
        <node v-for="articles in node.articles" :node="articles"></node>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  props: {
    node: Object,
    sub: Boolean
  },
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
