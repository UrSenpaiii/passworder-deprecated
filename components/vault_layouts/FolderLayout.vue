<template>
  <ul class="mt-3">
    <FolderLayoutElement v-for="el in notes" :key="el.title"></FolderLayoutElement>
  </ul>
</template>

<script>
export default {
  props: {
    notes: Array
  }
}
</script>
