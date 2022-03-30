<template>
  <div>
    <v-folder v-for="group in records" :key="group.id" :groupTitle="group.title" :node="group.children"/>
  </div>
</template>

<script>
export default {
  props: {records: Array}
}
</script>
