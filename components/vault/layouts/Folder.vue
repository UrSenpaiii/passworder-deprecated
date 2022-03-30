<template>
  <div>
    <div id="root" :class="[isActive ? 'activeNode' : '', 'border px-2 py-2']" @click="active">
      <i :class="'bi h3 ' + icon"/> <span class="h3">{{ node.title }}</span>
    </div>
    <div v-if="opened">
      <v-folder-item class="ms-3" v-for="(record, i) in list" :key="record.id"
                     :num="i+1" :title="record.title" :username="record.username" :id="record.id"/>
      <test class="ms-3" v-for="node in children" :key="node.id" :node="node"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  props: {node: Object},
  data() {
    return {
      opened: false,
      list: this.node.children.filter(el => !el.children),
      children: this.node.children.filter(el => el.children)
    }
  },
  computed: {
    icon() {
      return this.opened ? "bi-folder2-open" : "bi-folder"
    },
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
#root {
  transition: all .2s;

  &:hover {
    background-color: #EEE;
    cursor: pointer;
  }
}
</style>
