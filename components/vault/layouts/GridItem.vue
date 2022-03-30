<template>
  <div :class="[isActive ? 'activeNode' : '', 'col-2 p-2 m-4 card border-secondary']" @click="active">
    <div class="card-body text-center p-0">
      <div class="bi bi-circle h1"/>
      <span class="card-title h5 m-0">{{ node.title }}</span>
      <p class="card-text text-muted">{{ node.username }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {node: Object},
  computed: {
    isActive() {
      return this.$store.state.records.active === this.node.id
    }
  },
  methods: {
    active() {
      this.opened = !this.opened
      this.$store.commit("records/setActiveNode", this.node.id)
    }
  }
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
</style>
