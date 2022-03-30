<template>
  <ul class="p-0">
    <v-list-item v-for="(record, i) in recordsList" :key="record.id" :num="i+1" :node="record"/>
  </ul>
</template>

<script>
export default {
  props: {recordsList: Array}
}
</script>
