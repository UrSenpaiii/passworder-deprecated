<template>
  <div>
    <v-folder v-for="group in records" :key="group.id" :node="group"/>
  </div>
</template>

<script>
export default {
  props: {records: Array}
}
</script>
