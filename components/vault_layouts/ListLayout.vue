<template>
  <ul class="p-0">
    <v-item-layout v-for="(record, i) in records" :key="i" :num="i+1" :title="record.title" :login="record.login"/>
  </ul>
</template>

<script>
export default {
  props: {records: Array}
}
</script>
