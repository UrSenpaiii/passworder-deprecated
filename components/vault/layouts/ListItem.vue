<template>
  <li :class="[isActive ? 'activeNode' : '', 'd-flex px-3 py-1 border']" @click="active">
    <span v-if="num" class="align-self-center text-muted">{{ `${num}.` }}</span>
    <i class="bi bi-file-earmark h3 align-self-center mx-1"></i>
    <div>
      <div class="h5 my-0">{{ node.title }}</div>
      <div class="text-muted h6">{{ node.username }}</div>
    </div>
  </li>
</template>

<script>
export default {
  props: {num: Number, node: Object},
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

<style scoped>
li:hover {
  background-color: #F7F7F7;
  cursor: pointer;
}
</style>
