<template>
  <div class="row mx-0">
    <v-grid-item v-for="record in recordsList" :key="record.id" :node="record"/>
  </div>
</template>

<script>
export default {
  props: {recordsList: Array}
}
</script>
