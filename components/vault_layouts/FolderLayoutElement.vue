<template>
  <li class="sitemap-list-item position-relative">
    <i :class="'bi ' + showSub ? 'bi-folder2-open' : 'bi-folder'" @click="showSubBlock()"/>
    <a class="position-absolute" style="left: 25px">{{ nodes.title }}</a>
    <transition name="sub-list-animation">
      <ul v-if="showSub" class="sub-list">
        <folder-layout-node v-for="node in nodes" :key="node" :el="node"/>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  props: {nodes: Array},
  data() {
    return {
      showSub: false,
      isOpen: ""
    }
  },
  methods: {
    showSubBlock() {
      this.showSub = !this.showSub
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
