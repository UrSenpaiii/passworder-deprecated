<template>
  <li class="sitemap-list-item position-relative">

  </li>
</template>

<script>
export default {
  props: {el: Object},
  data() {
    return {
      showSub: false
    }
  },
  computed: {
    iconsColor() {
      return this.sub ? "" : "far"
    }
  },
  methods: {
    showSubBlock() {
      if (this.sub) {
        this.showSub = !this.showSub
        event.target.classList.toggle("bi-folder-open")
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
