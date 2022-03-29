<template>
  <div>
    <h3>{{ groupTitle }}</h3>
    <v-folder-item v-for="(record, i) in list" :key="record.title"
                   :num="i+1" :title="record.title" :username="record.username"/>
    <v-folder class="ms-3" v-for="(node, i) in children" :key="node.title + i"
              :groupTitle="node.title" :node="node.children"/>
  </div>
</template>

<script>
export default {
  props: {groupTitle: String, node: Array},
  data() {
    return {
      list: this.node.filter(el => !el.children),
      children: this.node.filter(el => el.children)
    }
  }
}
</script>
