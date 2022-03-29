<template>
  <div>
    <v-folder v-for="group in records" :key="group.title" :groupTitle="group.title" :node="group.children"/>
  </div>
</template>

<script>
export default {
  props: {records: Array}
}
</script>
