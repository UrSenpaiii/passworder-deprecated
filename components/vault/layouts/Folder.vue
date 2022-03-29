<template>
  <div>
    <div id="root" class="border px-2 py-2" @click="opened = !opened">
      <i :class="'bi h3 ' + icon" /> <span class="h3">{{ groupTitle }}</span>
    </div>
    <div v-if="opened">
      <v-folder-item class="ms-3" v-for="(record, i) in list" :key="record.title + i"
                     :num="i+1" :title="record.title" :username="record.username"/>
      <test class="ms-3" v-for="(node, i) in children" :key="node.title + i"
                :groupTitle="node.title" :node="node.children"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  props: {groupTitle: String, node: Array},
  data() {
    return {
      opened: false,
      list: this.node.filter(el => !el.children),
      children: this.node.filter(el => el.children)
    }
  },
  computed: {
    icon() {
      return this.opened ? "bi-folder2-open" : "bi-folder"
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
