<template>
  <div class="col-2 p-2 m-4 card border-secondary" @mouseover="showFav = true" @mouseleave="showFav = false">
    <div class="d-flex justify-content-between">
      <div>
        <transition><i class="bi bi-star h4" v-if="showFav"/></transition>
      </div>
      <v-context-menu/>
    </div>
    <div class="card-body text-center p-0">
      <div class="bi bi-circle h1"/>
      <span class="card-title h5 m-0">{{ title }}</span>
      <p class="card-text text-muted">{{ username }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {title: String, username: String},
  data: () => ({
    showFav: false
  })
}
</script>

<style scoped lang="scss">
div.card {
  transition: all .3s;

  &:hover {
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
  }
}

.card {
  cursor: pointer;
}

.v-enter-active, .v-leave-active {
  transition: opacity .1s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

i:hover {
  color: #606266;
}
</style>
