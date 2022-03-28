<template>
  <ul class="p-0">
    <v-list-item v-for="(record, i) in records" :key="i"
                   :num="i+1" :title="record.title" :username="record.username"/>
  </ul>
</template>

<script>
export default {
  props: {records: Array}
}
</script>
